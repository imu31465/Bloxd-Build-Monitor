export const id = 190;
export const ids = [51, 190];
export const modules = {
  38621: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      g: () => KD
    });
    const pD = new WeakMap;

    function sD(DD, zD) {
      return pD.set(DD, zD), DD
    }

    function KD(DD) {
      var zD;
      return null !== (zD = pD.get(DD)) && void 0 !== zD ? zD : null
    }
  },
  38524: (DD, zD, wD) => {
    function pD(DD, zD, wD) {
      var pD;
      const {
        width: sD,
        height: KD
      } = wD, rD = null !== (pD = DD.text) && void 0 !== pD ? pD : DD, LD = (rD.x / 100 - .5) * sD, cD = (rD.y / 100 - .5) * KD, gD = sD / 2 - zD.x;
      if (null !== DD.text && Math.abs(LD) <= gD && cD >= zD.top - KD / 2 && cD <= KD / 2 - zD.bottom) return {
        x: rD.x,
        y: rD.y
      };
      const RD = Math.min(0 === LD ? 1 / 0 : gD / Math.abs(LD), cD > 0 ? (KD / 2 - zD.bottom) / cD : cD < 0 ? (zD.top - KD / 2) / cD : 1 / 0);
      return !Number.isFinite(RD) || RD < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + LD * RD / sD * 100,
        y: 50 + cD * RD / KD * 100
      }
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  38533: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    const pD = 4,
      sD = 12e3,
      KD = 1e3;
    class rD {
      constructor() {
        let {
          limit: DD = pD,
          windowMs: zD = sD,
          spacingMs: wD = KD,
          now: rD = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = DD, this.windowMs = zD, this.spacingMs = wD, this.now = rD
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const DD of this.priority) DD.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const DD = this.now();
        this.sent.push(DD), this.lastSentAt = DD, this.schedule(), this.notify()
      }
      addPriority(DD) {
        return this.priority.add(DD), () => {
          this.priority.delete(DD)
        }
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const DD of this.priority)
          if (DD.waiting()) return !0;
        return !1
      }
      prune() {
        const DD = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= DD;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const DD = this.now(),
          zD = this.lastSentAt + this.spacingMs,
          wD = Math.min(zD > DD ? zD : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        wD !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, wD - DD)))
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38518: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD
    });
    class pD {
      constructor(DD, zD, wD) {
        this.KG = DD, this.beforeOpen = zD, this.afterClose = wD, this.open = !1, this.MI = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.MI && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(DD) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(DD)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.MI = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.MI || (this.snapshot = this.buildSnapshot(), this.KG(this.snapshot))
      }
    }
  },
  38629: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      SkyblockEntityFacing: () => LD,
      needsSkyblockEntityFacing: () => rD
    });
    var pD = wD(616),
      sD = wD(4257),
      KD = wD(38638);

    function rD(DD, zD) {
      if (DD.metaInfo === pD.e || "Iron Guardian" === DD.type || "Gold Guardian" === DD.type) return !0;
      if ("Pig" === DD.type) return "sitting" === DD.pose;
      if ("Person" !== DD.meshKind || void 0 === DD.meshOpts) return !1;
      let wD = null === zD || void 0 === zD ? void 0 : zD.get(DD.meshOpts);
      if (void 0 === wD) {
        var KD, rD;
        const pD = (0, sD.g)(DD);
        wD = !1, "pig_napoleon" === (null === pD || void 0 === pD || null === (KD = pD.opts.textures) || void 0 === KD ? void 0 : KD.head) ? wD = !0 : "npc_pig_head" === (null === pD || void 0 === pD || null === (rD = pD.opts.textures) || void 0 === rD ? void 0 : rD.head) && (wD = "sitting" === pD.opts.pose || "sitting"), zD && (zD.size >= 256 && zD.clear(), zD.set(DD.meshOpts, wD))
      }
      return "sitting" === wD ? "sitting" === DD.pose : wD
    }(0, KD.f)("skyblock", ((DD, zD) => {
      zD.setFacingTolerance(rD(DD) ? 0 : null)
    }));
    class LD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = DD, this.alsoVisit = zD, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = DD => {
          var zD;
          const wD = this.api.getEntityInfo(DD);
          wD && (rD(wD, this.meshFacingCache) && (this.api.setFacingTolerance(DD, 0), this.nextFacing.add(DD)), null === (zD = this.alsoVisit) || void 0 === zD || zD.call(this, DD, wD))
        }
      }
      DU() {
        const {
          api: DD
        } = this, zD = this.nextFacing;
        DD.forEachEntity(this.visit);
        for (const wD of this.facing) zD.has(wD) || DD.setFacingTolerance(wD, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = zD
      }
      dispose() {
        for (const DD of this.facing) this.api.setFacingTolerance(DD, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38509: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => Rc
    });
    const pD = "island";
    var sD = wD(351);
    const KD = (0, sD.Gb)([0, 0, -1]),
      rD = [{
        name: "S",
        bearing: (0, sD.Gb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, sD.Gb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: KD
      }, {
        name: "W",
        bearing: (0, sD.Gb)([1, 0, 0])
      }];

    function LD(DD, zD, wD) {
      return [100 * (wD.mapMaxX - DD) / (wD.mapMaxX - wD.mapMinX), 100 * (zD - wD.mapMinZ) / (wD.mapMaxZ - wD.mapMinZ)]
    }

    function cD(DD, zD, wD) {
      const sD = "local" === zD,
        KD = DD.background,
        rD = zD => KD ? LD(zD[0] - DD.mapOrigin[0], zD[2] - DD.mapOrigin[2], KD.bounds) : [50, 50],
        cD = (DD.insideDungeon ? [] : DD.landmarks).map((DD => {
          var zD, pD;
          return {
            id: DD.id,
            name: wD(DD.visited && DD.nameKey ? null !== (zD = DD.mapLabelKey) && void 0 !== zD ? zD : DD.nameKey : "skyblockGame:mapUnknown"),
            icon: DD.visited && null !== (pD = DD.icon) && void 0 !== pD ? pD : "unknown",
            visited: DD.visited,
            current: !1,
            position: rD(DD.position),
            travelKind: "landmark",
            travelId: DD.id
          }
        })),
        RD = DD.zones.map((zD => {
          var pD;
          return {
            id: zD.id,
            name: wD(zD.visited && zD.nameKey ? zD.nameKey : "skyblockGame:mapUnknown"),
            icon: zD.visited && null !== (pD = zD.icon) && void 0 !== pD ? pD : "unknown",
            visited: zD.visited,
            current: zD.id === DD.zoneId,
            position: zD.position,
            thumbnail: zD.visited ? zD.id : void 0,
            travelKind: "zone",
            travelId: zD.id
          }
        })),
        AD = DD.insideDungeon || !KD ? [] : DD.portals.map((DD => {
          var zD;
          return {
            id: DD.id,
            name: wD(null !== (zD = DD.nameKey) && void 0 !== zD ? zD : "skyblockGame:mapUnknown"),
            icon: DD.visited ? "dungeons" === DD.destination ? "portal_orange" : "portal" : "unknown",
            visited: DD.visited,
            current: !1,
            position: rD(DD.position),
            colour: DD.colour,
            travelKind: "zone",
            travelId: DD.destination
          }
        })),
        UD = sD ? cD : RD,
        fD = UD.filter((DD => DD.visited)).length,
        ID = KD ? (KD.bounds.mapMaxX - KD.bounds.mapMinX) / (KD.bounds.mapMaxZ - KD.bounds.mapMinZ) : 2,
        BD = KD ? JSON.stringify([KD.bounds, DD.mapOrigin]) : "";
      return {
        local: sD,
        points: UD,
        portals: sD ? AD : [],
        progress: UD.length ? wD("skyblockGame:mapDiscovered", {
          current: String(fD),
          total: String(UD.length)
        }) : null,
        percent: UD.length ? 100 * fD / UD.length : 0,
        canTravel: [...UD, ...sD ? AD : []].some((DD => DD.visited && !DD.current)),
        noLandmarks: sD && !DD.insideDungeon && 0 === cD.length,
        background: KD ? {
          imageKey: KD.imageKey,
          fallbackImageKey: DD.zoneId,
          geometryKey: BD,
          label: wD(KD.labelKey),
          colour: KD.backgroundColour,
          ratio: ID
        } : null,
        connections: gD(DD.zones),
        minimap: KD ? {
          imageKey: KD.imageKey,
          fallbackImageKey: DD.zoneId,
          geometryKey: BD,
          label: wD(KD.labelKey),
          colour: KD.backgroundColour,
          caption: wD(DD.zoneId === pD ? "skyblockGame:zoneIsland" : KD.labelKey),
          width: (KD.bounds.mapMaxX - KD.bounds.mapMinX) / KD.minimapSpan * 100 + "%",
          height: (KD.bounds.mapMaxZ - KD.bounds.mapMinZ) / KD.minimapSpan * 100 + "%",
          markers: [...cD, ...AD]
        } : null
      }
    }

    function gD(DD) {
      const zD = new Set;
      return DD.flatMap((wD => wD.connections.flatMap((pD => {
        const sD = DD.find((DD => DD.id === pD)),
          KD = [wD.id, pD].sort().join("|");
        return !sD || zD.has(KD) ? [] : (zD.add(KD), [{
          id: `${wD.id}-${pD}`,
          start: wD.position,
          end: sD.position,
          explored: wD.visited && sD.visited
        }])
      }))))
    }
    var RD = wD(38518);
    class AD extends RD.c {}
    const UD = "skyblockMapView";
    class fD extends AD {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(DD, pD, sD), this.requestTravel = zD, this.translate = wD, this.now = KD, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = DD => {
          this.tab = DD, this.feedbackKey = "", this.emit()
        }, this.travel = (DD, zD) => {
          if (!this.map || this.pending || this.MI) return;
          const wD = ("zone" === DD ? this.map.zones : this.map.landmarks).find((DD => DD.id === zD));
          if (wD) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in wD && !wD.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (wD.visited)
              if ("zone" === DD && zD === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const wD = ++this.nextRequestId;
                this.pending = {
                  requestId: wD,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: DD,
                  id: zD,
                  requestId: wD
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
      setTranslator(DD) {
        this.translate = DD, this.emit()
      }
      QI(DD) {
        var zD;
        if (!this.MI)
          if ("entities" !== DD.kind)
            if ("open" !== DD.kind) {
              var wD, pD;
              if ("snapshot" === DD.kind)(null === (wD = DD.snapshot) || void 0 === wD ? void 0 : wD.zoneId) !== (null === (pD = this.map) || void 0 === pD ? void 0 : pD.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = DD.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === DD.kind) {
                var sD;
                DD.requestId === (null === (sD = this.pending) || void 0 === sD ? void 0 : sD.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (DD.requestId === (null === (zD = this.pending) || void 0 === zD ? void 0 : zD.requestId)) {
                var KD;
                this.pending = null, this.feedbackKey = null !== (KD = DD.errorKey) && void 0 !== KD ? KD : "", null === DD.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = DD.entities
      }
      DU() {
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
          presentation: this.map ? cD(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const ID = 67.5 * Math.PI / 180;

    function BD(DD, zD) {
      const wD = Math.abs(DD);
      if (wD > ID || zD.trackHalfWidth <= 0) return null;
      const pD = zD.trackHalfWidth,
        sD = zD.screenHalfWidth / (zD.tanHalfFovX * Math.max(.5, Math.cos(zD.pitch))),
        KD = Math.min(Math.atan(.6 * pD / sD), .75 * ID),
        rD = sD * Math.tan(KD);
      let LD;
      if (wD <= KD) LD = sD * Math.tan(wD);
      else {
        const DD = ID - KD,
          zD = Math.max(0, sD * DD / (Math.cos(KD) ** 2 * (pD - rD)) - 1),
          cD = (wD - KD) / DD;
        LD = rD + (pD - rD) * (1 + zD) * cD / (1 + zD * cD)
      }
      return 50 + Math.sign(DD) * LD * 50 / pD
    }
    class GD {
      constructor(DD, zD) {
        this.map = DD, this.visited = zD, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = zD ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const DD = this.map.getSnapshot().map;
        return !DD || DD.insideDungeon ? [] : DD.landmarks.filter((DD => DD.visited === this.visited)).map((DD => {
          var zD, wD;
          return {
            id: `landmark:${DD.id}`,
            position: DD.position,
            icon: null !== (zD = DD.icon) && void 0 !== zD ? zD : "unknown",
            nameKey: null !== (wD = DD.nameKey) && void 0 !== wD ? wD : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class hD {
      constructor(DD, zD, wD, pD) {
        this.map = DD, this.kind = zD, this.position = wD, this.alive = pD, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = zD, this.range = "enemy" === zD ? 48 : 64, this.limit = 12
      }
      PJ(DD) {
        if ("enemy" !== this.kind || this.alive(DD.AK)) return this.position(DD.AK)
      }
      getPoints() {
        const DD = [];
        for (const pD of this.map.getEntities()) {
          if (pD.kind !== this.kind || "enemy" === this.kind && !this.alive(pD.compassEntityId)) continue;
          const sD = this.position(pD.compassEntityId);
          var zD, wD;
          if (sD) DD.push({
            id: `${this.kind}:${pD.compassEntityId}`,
            AK: pD.compassEntityId,
            kind: this.kind,
            icon: null !== (zD = pD.icon) && void 0 !== zD ? zD : pD.npcSkin ? `npc_${pD.npcSkin}` : this.kind,
            displayName: pD.displayName,
            position: sD,
            nameKey: null !== (wD = pD.nameKey) && void 0 !== wD ? wD : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return DD
      }
    }
    class nD {
      constructor(DD) {
        this.map = DD, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const DD = this.map.getSnapshot().map;
        return !DD || DD.insideDungeon ? [] : DD.portals.map((DD => {
          var zD;
          return {
            id: "portal:" + DD.id,
            kind: "portal",
            position: DD.position,
            nameKey: null !== (zD = DD.nameKey) && void 0 !== zD ? zD : "skyblockGame:compassUnvisitedZone",
            icon: DD.visited ? "dungeons" === DD.destination ? "portal_orange" : "portal" : "unknown",
            colour: DD.colour
          }
        }))
      }
    }
    class MD {
      constructor(DD) {
        this.target = DD, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const DD = this.target();
        return DD ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: DD.position,
          nameKey: DD.nameKey
        }] : []
      }
    }

    function OD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.position;
      const KD = pD[0] - zD[0],
        rD = pD[2] - zD[2];
      return {
        ...DD,
        position: pD,
        offset: sD.c.computeShortestRotation(wD, (0, sD.Gb)([KD, 0, rD])),
        distance: Math.hypot(KD, pD[1] - zD[1], rD)
      }
    }
    let JD;

    function ED(DD, zD) {
      var wD;
      return (null === (wD = JD) || void 0 === wD ? void 0 : wD.locale) !== zD && (JD = {
        locale: zD,
        near: new Intl.NumberFormat(zD, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(zD, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (DD < 10 ? JD.near : JD.far).format(DD)
    }
    class QD {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(DD) {
        return this.providers.set(DD.id, DD), this.refreshAt = 0, () => {
          this.providers.get(DD.id) === DD && (this.providers.delete(DD.id), this.refreshAt = 0)
        }
      }
      frame(DD, zD, wD) {
        if (wD >= this.refreshAt) {
          this.refreshAt = wD + 200, this.candidates = [];
          for (const zD of this.providers.values()) {
            if (!zD.enabled) continue;
            const wD = zD.getPoints().map((zD => {
              const wD = zD.position;
              return {
                point: zD,
                distance: Math.hypot(wD[0] - DD[0], wD[1] - DD[1], wD[2] - DD[2])
              }
            })).filter((DD => DD.distance <= zD.range)).sort(((DD, zD) => DD.distance - zD.distance)).slice(0, zD.limit);
            for (const {
                point: DD
              }
              of wD) this.candidates.push({
              provider: zD,
              point: DD
            })
          }
        }
        const pD = [];
        for (const {
            point: sD,
            provider: KD
          }
          of this.candidates) {
          if (!KD.enabled) continue;
          const wD = KD.PJ ? KD.PJ(sD) : sD.position;
          if (wD) {
            const KD = OD(sD, DD, zD, wD);
            Math.abs(KD.offset) <= ID && pD.push(KD)
          }
        }
        return pD
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var XD = wD(36586),
      VD = wD(58);
    const PD = [{
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
      CD = PD.length;

    function xD(DD) {
      return DD >= CD ? 1 : DD + 1
    }
    const TD = "skyblockQuests",
      bD = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      jD = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function dD(DD) {
      let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const wD = Math.max(0, Math.floor(DD)),
        pD = Math.floor(wD % 1e3 / 100),
        sD = Math.floor(wD / 1e3),
        KD = sD % 60,
        rD = Math.floor(sD / 60),
        LD = rD % 60,
        cD = Math.floor(rD / 60),
        gD = DD => DD < 10 ? `0${DD}` : String(DD),
        RD = zD ? `.${pD}` : "";
      return cD > 0 ? `${cD}:${gD(LD)}:${gD(KD)}${RD}` : `${LD}:${gD(KD)}${RD}`
    }
    const SD = "devquests",
      iD = "none",
      lD = {
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
      WD = "Compressed Messy Stone",
      ND = {
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
      ZD = ["Stone", "Diorite", "Andesite", "Granite"],
      yD = new Set(ZD),
      kD = (Object.keys(ND), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const mD = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function eD(DD, zD) {
      const wD = Math.floor(5 * DD / (2 * zD + 1));
      return Math.min(4, Math.max(0, wD))
    }
    var oD = wD(1245);
    var aD = wD(36352);
    var uD = wD(36580),
      vD = wD(25),
      tD = wD(8883);
    const FD = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      YD = 1e3;

    function HD(DD) {
      return Math.max(0, DD)
    }

    function qD(DD) {
      return 1 + .01 * HD(DD)
    }

    function Dz(DD) {
      return 1 + .005 * HD(DD)
    }

    function zz(DD) {
      return 1 + .005 * HD(DD)
    }

    function wz(DD) {
      return .01 * HD(DD)
    }

    function pz(DD) {
      return 150 / (150 + HD(DD))
    }

    function sz(DD) {
      return 1 + .002 * HD(DD)
    }

    function Kz(DD) {
      return Math.round(10 * DD) / 10
    }

    function rz(DD, zD) {
      switch (DD) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Kz(100 * (Dz(zD) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Kz(100 * (qD(zD) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Kz(100 * (zz(zD) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Kz(100 * wz(zD))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Kz(100 * (1 - pz(zD)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Kz(100 * (sz(zD) - 1))
          }
      }
    }

    function Lz(DD) {
      return "farming" === DD ? 200 : 100
    }

    function cz(DD, zD) {
      if (!Number.isSafeInteger(DD) || DD < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const wD = Lz(zD),
        pD = DD => function(DD, zD) {
          return Lz(DD) * zD * (zD + 1) / 2
        }(zD, DD);
      let sD = Math.min(YD, Math.floor((Math.sqrt(8 * DD / wD + 1) - 1) / 2));
      return sD < YD && pD(sD + 1) <= DD ? sD++ : pD(sD) > DD && sD--, {
        totalXp: DD,
        level: sD,
        xpIntoLevel: DD - pD(sD),
        xpForNextLevel: sD === YD ? null : wD * (sD + 1)
      }
    }
    const gz = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Rz(DD) {
      return gz.has(DD)
    }
    const Az = new Set(sD.sb);

    function Uz(DD) {
      return Az.has(DD)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const fz = {
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
      Iz = {
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
      Bz = {
        ...Iz,
        ...Object.fromEntries(Object.entries(kD).map((DD => {
          let [zD, wD] = DD;
          return [zD, 9 * Iz[wD]]
        })))
      },
      Gz = {
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
      hz = {
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
    const nz = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Mz = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Oz(DD) {
      return `rgb(${Mz[DD].join(", ")})`
    }

    function Jz(DD, zD, wD) {
      if (!wD) return DD(zD);
      const pD = {};
      for (const [sD, KD] of Object.entries(wD)) pD[sD] = "string" === typeof KD ? KD : DD(KD.translationKey);
      return DD(zD, pD)
    }
    class Ez {
      constructor(DD, zD) {
        this.now = DD, this.getJournal = zD, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Qg = !1, this.onShown = () => {}
      }
      enqueue(DD) {
        const zD = Qz(DD);
        if (zD) this.pending.push(DD);
        else {
          const zD = this.pending.findIndex(Qz);
          this.pending.splice(-1 === zD ? this.pending.length : zD, 0, DD)
        }
        return (null === this.current || null !== this.followUp && !zD) && (this.advance(), !0)
      }
      setHeld(DD) {
        return this.Qg = DD, !DD && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      DU() {
        const DD = this.getJournal(),
          zD = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === zD ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === zD || void 0 === zD ? void 0 : zD.kind) && DD && DD.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === zD || void 0 === zD ? void 0 : zD.kind)) {
          const DD = this.findFollowUp(this.current);
          if ("step" !== (null === DD || void 0 === DD ? void 0 : DD.kind) || DD.questId !== zD.questId || DD.step.id !== zD.step.id) return this.showFollowUp(DD, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(DD, zD, wD) {
        var pD, sD, KD, rD;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, DD, wD);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, DD);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, DD, zD);
        const {
          questCompletionKind: LD,
          questCompletionNameKey: cD
        } = this.current, gD = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, RD = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, AD = "step" === (null === (pD = this.followUp) || void 0 === pD ? void 0 : pD.kind) ? this.followUp : null, UD = "explore" === (null === (sD = this.followUp) || void 0 === sD ? void 0 : sD.kind);
        let fD;
        return fD = UD ? DD("skyblockGame:questExploreTitle") : null !== AD ? "quest" === LD ? DD("skyblockGame:questNextQuestTitle", {
          quest: DD(AD.questNameKey)
        }) : DD("skyblockGame:questNextStepTitle") : DD("started" === LD ? "skyblockGame:questStartedTitle" : "quest" === LD ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? LD : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: fD,
          name: UD ? zD("skyblockGame:questExploreName") : null !== AD ? Jz(zD, AD.step.nameKey, AD.step.nameParams) : Jz(zD, cD, gD),
          description: UD ? zD("skyblockGame:questExploreDescription") : null === AD ? null : Jz(zD, AD.step.descriptionKey, AD.step.descriptionParams),
          reward: null === this.followUp && RD > 0 ? zD("skyblockGame:questCoinRewardSuffix", {
            amount: RD.toLocaleString(wD)
          }) : null,
          iconItem: null !== (KD = null === AD || void 0 === AD ? void 0 : AD.step.questIconItem) && void 0 !== KD ? KD : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== AD && (null === (rD = this.getJournal()) || void 0 === rD ? void 0 : rD.trackedQuestId) === AD.questId ? AD.step.nameKey : null
        }
      }
      getSkillLevelView(DD, zD, wD) {
        let {
          skill: pD,
          beforeLevel: sD,
          level: KD
        } = DD;
        const rD = rz(pD, sD),
          LD = rz(pD, KD);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: zD(`skyblockGame:${pD}`),
          name: zD("skyblockGame:skillLevelUp", {
            to: KD.toLocaleString(wD)
          }),
          description: rD.percent === LD.percent ? null : zD(`${LD.translationKey}Change`, {
            before: rD.percent.toLocaleString(wD),
            after: LD.percent.toLocaleString(wD)
          }),
          reward: null,
          iconItem: nz[pD],
          accent: Oz(pD),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(DD, zD) {
        let {
          landmarkNameKey: wD
        } = DD;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: zD("skyblockGame:landmarkDiscovered"),
          name: zD(wD),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(DD, zD, wD) {
        let {
          titleKey: pD,
          textKey: sD,
          params: KD = {},
          nameKeys: rD = {},
          iconItem: LD = null
        } = DD;
        const cD = {
          ...KD
        };
        for (const [gD, RD] of Object.entries(rD)) cD[gD] = zD(RD);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: zD(pD),
          name: wD(sD, cD),
          description: null,
          reward: null,
          iconItem: LD,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var DD;
        if (null !== this.followUp) return 5600;
        switch (null === (DD = this.current) || void 0 === DD ? void 0 : DD.questCompletionKind) {
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
      showFollowUp(DD, zD) {
        null === DD || this.Qg ? this.advance() : (this.followUp = DD, this.token++, this.shownAt = this.now(), this.expiresAt = null !== zD && void 0 !== zD ? zD : this.shownAt + this.durationMs())
      }
      findFollowUp(DD) {
        var zD;
        const wD = this.getJournal();
        if (!wD || this.hasPendingQuestPopup() || Qz(DD)) return null;
        const pD = "started" === DD.questCompletionKind ? wD.active.some((zD => zD.id === DD.questCompletionQuestId)) : "quest" === DD.questCompletionKind ? wD.completed.some((zD => zD.id === DD.questCompletionQuestId)) : [...wD.active, ...wD.completed].some((zD => zD.id === DD.questCompletionQuestId && zD.subquests.some((zD => zD.id === DD.questCompletionStepId && "completed" === zD.status))));
        if (!pD) return null;
        if ("quest" === DD.questCompletionKind && 0 === wD.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const sD = wD.active.find((DD => DD.id === wD.trackedQuestId)),
          KD = null !== (zD = null === sD || void 0 === sD ? void 0 : sD.subquests.find((DD => "ready" === DD.status))) && void 0 !== zD ? zD : null === sD || void 0 === sD ? void 0 : sD.subquests.find((DD => "active" === DD.status));
        return KD ? {
          kind: "step",
          questId: sD.id,
          questNameKey: sD.nameKey,
          step: KD
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((DD => !Qz(DD)))
      }
      advance() {
        var DD;
        this.current = this.Qg ? null : null !== (DD = this.pending.shift()) && void 0 !== DD ? DD : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Qz(DD) {
      return Xz(DD.questCompletionKind)
    }

    function Xz(DD) {
      return "skillLevel" === DD || "landmark" === DD || "npcNote" === DD
    }
    var Vz = wD(38524);
    const Pz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Cz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      xz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Tz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      bz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var jz = wD(38528);
    const dz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Sz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const iz = wD.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const lz = wD.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      Wz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var Nz = wD(18423),
      Zz = wD(20454),
      yz = wD(22868),
      kz = wD(24414),
      mz = wD(26117);
    const ez = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: Nz,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: Zz,
      cow: bz,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: wD(26129),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Pz,
      fishing_1: Pz,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Cz,
      guardian_iron: xz,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: yz,
      mines: kz,
      mining_1: kz,
      npc: Tz,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: bz,
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
      npc_gold_guardian: Cz,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: xz,
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
      npc_tentacle_guy: jz,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: dz,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: iz,
      quest_talk: lz,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: Wz,
      watermelon: mz
    };

    function oz(DD, zD) {
      const wD = document.createElement("img");
      return wD.className = zD, wD.src = DD, wD.alt = "", wD.draggable = !1, wD
    }

    function az(DD) {
      var zD;
      const wD = null !== (zD = ez[DD]) && void 0 !== zD ? zD : DD.startsWith("npc_") ? Tz : Wz;
      if ("portal" !== DD) return oz(wD, "SkyblockMapIcon");
      const pD = document.createElement("span");
      pD.className = "SkyblockMapIcon Portal";
      const sD = document.createElement("span");
      return sD.className = "SkyblockMapIconTint", sD.style.maskImage = sD.style.webkitMaskImage = `url("${Sz}")`, pD.append(oz(wD, "SkyblockMapIconLayer"), sD, oz(Sz, "SkyblockMapIconLayer SkyblockMapIconShade")), pD
    }
    var uz = wD(38493),
      vz = wD(4263);
    const tz = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Fz(DD) {
      const zD = new vz.g(DD);
      return {
        radius: 45,
        squareness: 3,
        wobbles: tz.map((DD => {
          let {
            lobes: wD,
            amount: pD
          } = DD;
          return {
            lobes: wD[Math.floor(zD.next() * wD.length)],
            amount: pD[0] + zD.next() * (pD[1] - pD[0]),
            phase: 2 * zD.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function Yz(DD) {
      let {
        radius: zD,
        squareness: wD,
        wobbles: pD,
        samples: sD
      } = DD;
      const KD = [];
      for (let rD = 0; rD < sD; rD++) {
        const DD = 2 * Math.PI * rD / sD,
          LD = Math.cos(DD),
          cD = Math.sin(DD),
          gD = zD * (Math.abs(LD) ** wD + Math.abs(cD) ** wD) ** (-1 / wD) * pD.reduce(((zD, wD) => {
            let {
              lobes: pD,
              amount: sD,
              phase: KD
            } = wD;
            return zD + sD * Math.sin(pD * DD + KD)
          }), 1);
        KD.push(`${(50+gD*LD).toFixed(2)} ${(50+gD*cD).toFixed(2)}`)
      }
      return `M${KD.join("L")}Z`
    }
    const Hz = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class qz {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.MI = !1, this.mountCompass = DD => {
          var zD;
          if (null === (zD = this.stopLayout) || void 0 === zD || zD.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !DD || this.MI) return;
          const wD = DD.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: DD,
            track: wD,
            label: DD.querySelector(".SkyblockCompassLabel")
          }, wD.replaceChildren();
          for (let sD = 0; sD < 4; sD++) {
            const DD = document.createElement("span");
            DD.className = "SkyblockCompassCardinal", wD.appendChild(DD), this.cardinals.push(DD)
          }
          const pD = (0, uz.d)(Hz, [DD], this.layout);
          this.stopLayout = () => {
            pD(), wD.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = DD => {
          this.terrain = this.MI ? null : DD, this.render(this.frame)
        }, this.mountMinimapSearchArea = DD => {
          this.mountSearchArea("minimap", DD)
        }, this.mountMapSearchArea = DD => {
          this.mountSearchArea("map", DD)
        }, this.mountPlayer = DD => {
          this.player = this.MI ? null : DD, this.render(this.frame)
        }, this.mountWaypoint = DD => {
          var zD, wD;
          if (null === (zD = this.stopWaypoint) || void 0 === zD || zD.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !DD || this.MI) return;
          const pD = DD.querySelector(".SkyblockQuestWaypointMarker");
          pD.replaceChildren(az("quest")), this.markerIcon = "quest", this.waypoint = {
            root: DD,
            marker: pD,
            clip: DD.querySelector(".SkyblockQuestWaypointTextClip"),
            text: DD.querySelector(".SkyblockQuestWaypointText"),
            label: DD.querySelector(".SkyblockQuestWaypointLabel"),
            distance: DD.querySelector(".SkyblockQuestWaypointDistance"),
            hint: DD.querySelector(".SkyblockQuestWaypointHint")
          };
          const sD = () => {
              this.waypointMarkerSize = {
                width: pD.offsetWidth,
                height: pD.offsetHeight
              }, this.waypointInset = {
                x: pD.offsetWidth / 2 + 8,
                top: pD.offsetHeight + 8,
                bottom: 8
              }
            },
            KD = new ResizeObserver((() => {
              sD(), this.render(this.frame)
            }));
          KD.observe(pD, {
            box: "border-box"
          });
          const rD = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", rD), null === (wD = window.visualViewport) || void 0 === wD || wD.addEventListener("resize", rD), this.stopWaypoint = () => {
            var DD;
            KD.disconnect(), window.removeEventListener("resize", rD), null === (DD = window.visualViewport) || void 0 === DD || DD.removeEventListener("resize", rD)
          }, rD(), sD(), this.render(this.frame)
        }, this.mountWaypointOrigin = DD => {
          var zD;
          if (null === (zD = this.stopWaypointOrigin) || void 0 === zD || zD.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = DD && !this.MI ? Number(DD.dataset.notificationToken) : null, DD && !this.MI && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const zD = {
              nameKey: DD.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = zD;
            const wD = () => {
                const wD = DD.getBoundingClientRect();
                zD.x = (wD.left + wD.width / 2) / window.innerWidth * 100, zD.y = (wD.top + wD.height / 2) / window.innerHeight * 100
              },
              pD = new ResizeObserver(wD);
            pD.observe(DD.parentElement), pD.observe(DD), window.addEventListener("resize", wD), this.stopWaypointOrigin = () => {
              pD.disconnect(), window.removeEventListener("resize", wD)
            }, wD()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const DD = this.compass.root,
            zD = getComputedStyle(DD),
            wD = getComputedStyle(document.documentElement),
            pD = parseFloat(wD.fontSize),
            sD = parseFloat(zD.getPropertyValue("--compass-icon-size")) * pD,
            KD = "1" === zD.getPropertyValue("--compass-fit-top").trim(),
            rD = KD ? 1 : 8,
            LD = Array.from(document.querySelectorAll(Hz), (DD => {
              var zD;
              return (null !== (zD = DD.querySelector(".MiddleTextTop")) && void 0 !== zD ? zD : DD).getBoundingClientRect()
            })).filter((DD => DD.width > 0 && DD.height > 0));
          let cD = (parseFloat(wD.getPropertyValue("--notchTop")) || 0) + rD,
            gD = "";
          if (KD) {
            const zD = window.innerWidth / 2,
              wD = DD.getBoundingClientRect().height,
              KD = [cD, ...LD.map((DD => Math.max(cD, DD.bottom + rD)))].sort(((DD, zD) => DD - zD));
            for (const DD of KD) {
              let KD = zD - 8;
              for (const pD of LD) pD.bottom + rD <= DD || pD.top >= DD + wD + rD || (KD = Math.min(KD, pD.right <= zD ? zD - pD.right - 8 : pD.left - zD - 8));
              const RD = 2 * KD - sD;
              if (RD >= 16 * pD) {
                gD = `${RD}px`, cD = DD;
                break
              }
            }
          }
          DD.style.maxWidth !== gD && (DD.style.maxWidth = gD);
          const RD = DD.getBoundingClientRect(),
            AD = this.compassSize.trackHalfWidth;
          if (RD.width > 0) {
            const DD = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: DD.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * sD / DD.width
          }
          if (!gD)
            for (const UD of LD) UD.right > RD.left - 8 && UD.left < RD.right + 8 && (cD = Math.max(cD, UD.bottom + rD));
          DD.style.top = `${cD}px`, this.compassSize.trackHalfWidth !== AD && this.render(this.frame)
        }
      }
      mountSearchArea(DD, zD) {
        this.searchAreas[DD] = this.MI ? null : zD, this.render(this.frame)
      }
      render(DD) {
        if (this.MI) return;
        if (this.frame = DD, this.compass && (Dw(this.compass.root, !DD), DD)) {
          const zD = this.compassSize.trackHalfWidth / 50;
          DD.compass.cardinals.forEach(((DD, wD) => {
            const pD = this.cardinals[wD];
            pD.textContent !== DD.name && (pD.textContent = DD.name), Dw(pD, DD.hidden), pD.style.translate = DD.left * zD + "px"
          }));
          const wD = new Set;
          DD.compass.markers.forEach(((pD, sD) => {
            var KD;
            wD.add(pD.id);
            let rD = this.markers.get(pD.id);
            rD || (rD = document.createElement("span"), rD.className = "SkyblockCompassMarker", this.markers.set(pD.id, rD), this.compass.track.appendChild(rD)), rD.dataset.icon !== pD.icon && (rD.dataset.icon = pD.icon, rD.replaceChildren(az(pD.icon))), rD.style.color = null !== (KD = pD.colour) && void 0 !== KD ? KD : "", rD.style.translate = pD.left * zD + "px", rD.style.zIndex = String(DD.compass.markers.length - sD), rD.title !== pD.name && (rD.title = pD.name)
          }));
          for (const [DD, pD] of this.markers) wD.has(DD) || (pD.remove(), this.markers.delete(DD));
          this.compass.label.textContent !== DD.compass.label && (this.compass.label.textContent = DD.compass.label)
        }
        this.terrain && (Dw(this.terrain, !(null !== DD && void 0 !== DD && DD.minimap)), null !== DD && void 0 !== DD && DD.minimap && (this.terrain.style.transform = DD.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", DD.minimap.iconRotation)));
        const zD = null === DD || void 0 === DD ? void 0 : DD.searchArea;
        for (const wD of [this.searchAreas.minimap, this.searchAreas.map])
          if (wD && (Dw(wD, !zD), zD)) {
            if (this.searchAreaPath.seed !== zD.shapeSeed && (this.searchAreaPath = {
                seed: zD.shapeSeed,
                d: Yz(Fz(zD.shapeSeed))
              }), wD.dataset.shapeSeed !== zD.shapeSeed) {
              wD.dataset.shapeSeed = zD.shapeSeed;
              for (const DD of wD.querySelectorAll("path")) DD.setAttribute("d", this.searchAreaPath.d)
            }
            wD.style.left = `${zD.left}%`, wD.style.top = `${zD.top}%`, wD.style.width = `${zD.width}%`, wD.style.height = `${zD.height}%`
          } if (this.player && (Dw(this.player, !(null !== DD && void 0 !== DD && DD.player) || DD.player.hidden), null !== DD && void 0 !== DD && DD.player && (this.player.style.left = `${DD.player.left}%`, this.player.style.top = `${DD.player.top}%`, this.player.style.setProperty("--map-player-rotation", DD.player.rotation))), this.waypoint) {
          const {
            root: zD,
            marker: wD,
            clip: pD,
            text: sD,
            label: KD,
            distance: rD,
            hint: LD
          } = this.waypoint, cD = !(null !== DD && void 0 !== DD && DD.waypoint) || null !== DD.waypoint.popupToken && DD.waypoint.popupToken !== this.waypointOriginToken;
          Dw(zD, cD);
          let gD = 1;
          const RD = this.waypointLaunch;
          if (!cD && RD && DD.waypoint.nameKey === RD.nameKey) {
            const DD = performance.now();
            RD.startedAt ??= DD, gD = Math.min(1, Math.max(0, (DD - RD.startedAt - 450) / 1e3)), wD.style.opacity = String(Math.min(1, (DD - RD.startedAt) / 150)), 1 === gD && (this.waypointLaunch = null)
          } else wD.style.opacity = "", RD && null !== RD.startedAt && (this.waypointLaunch = null);
          if (zD.classList.toggle("Launching", gD < 1), null !== DD && void 0 !== DD && DD.waypoint) {
            const zD = this.waypointInset,
              cD = "quest_talk" === DD.waypoint.markerIcon ? function(DD, zD, wD) {
                if (!DD.text || null === DD.blockHeight || 0 === DD.nearness) return DD;
                const pD = DD.blockHeight / 100 * wD.height,
                  sD = -DD.nearness * (zw * pD + zD.width / 2),
                  KD = DD.nearness * (ww * pD + zD.height / 2);
                return {
                  ...DD,
                  text: {
                    x: DD.text.x + sD / wD.width * 100,
                    y: DD.text.y + KD / wD.height * 100
                  }
                }
              }(DD.waypoint, this.waypointMarkerSize, this.viewport) : DD.waypoint,
              AD = (0, Vz.c)(cD, zD, this.viewport),
              UD = gD * gD * (3 - 2 * gD),
              fD = gD < 1 ? RD.x + (AD.x - RD.x) * UD : AD.x,
              ID = gD < 1 ? RD.y + (AD.y - RD.y) * UD : AD.y;
            wD.style.translate = `${fD}vw ${ID}vh`, pD.style.clipPath = `inset(${zD.top}px ${zD.x}px ${zD.bottom}px)`, Dw(sD, gD < 1 || !DD.waypoint.text), sD.style.opacity = String(1 - DD.waypoint.nearness), DD.waypoint.text && (sD.style.translate = `${DD.waypoint.text.x}vw ${DD.waypoint.text.y}vh`), KD.textContent !== DD.waypoint.name && (KD.textContent = DD.waypoint.name), this.markerIcon !== DD.waypoint.markerIcon && (this.markerIcon = DD.waypoint.markerIcon, wD.replaceChildren(az(this.markerIcon))), rD.textContent !== DD.waypoint.distance && (rD.textContent = DD.waypoint.distance), Dw(LD, null === DD.waypoint.hint), null !== DD.waypoint.hint && LD.textContent !== DD.waypoint.hint && (LD.textContent = DD.waypoint.hint)
          }
        }
      }
      dispose() {
        var DD, zD;
        this.mountWaypointOrigin(null), this.render(null), null === (DD = this.stopLayout) || void 0 === DD || DD.call(this), this.stopLayout = null, null === (zD = this.stopWaypoint) || void 0 === zD || zD.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.MI = !0
      }
    }

    function Dw(DD, zD) {
      DD.hidden !== zD && (DD.hidden = zD)
    }
    const zw = .55,
      ww = .6;
    const pw = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class sw {
      constructor(DD, zD, wD, pD) {
        this.map = DD, this.quests = zD, this.compass = wD, this.display = new qz, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.MI = !1, this.snapshot = null, this.texts = new Map, this.translate = pD
      }
      setTranslator(DD, zD) {
        this.translate = DD, this.locale = zD, this.metresFormat = new Intl.NumberFormat(zD), this.texts.clear()
      }
      translateCached(DD, zD) {
        const wD = void 0 === zD ? DD : `${DD} ${zD}`;
        let pD = this.texts.get(wD);
        return void 0 === pD && (this.texts.size >= 500 && this.texts.clear(), pD = this.translate(DD, void 0 === zD ? void 0 : {
          distance: zD
        }), this.texts.set(wD, pD)), pD
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(DD, zD, wD) {
        if (this.MI) return;
        if (!DD) return this.snapshot = null, void this.display.render(null);
        const pD = this.map.getSnapshot().map,
          cD = wD.cameraHeading,
          gD = {
            ...this.display.compassSize,
            tanHalfFovX: wD.tanHalfFovX,
            pitch: wD.cameraPitch
          },
          RD = [];
        if (pD)
          for (const sD of this.compass.frame(DD, cD, zD)) {
            const DD = BD(sD.offset, gD);
            null !== DD && RD.push({
              ...sD,
              left: DD
            })
          }
        const AD = function(DD, zD) {
            const wD = [],
              pD = DD => "quest" === DD.kind ? DD.distance - 1 : DD.distance,
              sD = [...DD].sort(((DD, zD) => pD(DD) - pD(zD) || DD.id.localeCompare(zD.id)));
            for (const KD of sD) {
              let DD = !1;
              if ("quest" !== KD.kind)
                for (const pD of wD)
                  if (Math.abs(pD.left - KD.left) < zD) {
                    DD = !0;
                    break
                  } DD || wD.push(KD)
            }
            return wD
          }(RD, this.display.compassSpacing),
          UD = function(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              wD = null;
            for (const pD of DD) Math.abs(pD.offset) <= zD && (!wD || pD.distance < wD.distance || pD.distance === wD.distance && Math.abs(pD.offset) < Math.abs(wD.offset)) && (wD = pD);
            return wD
          }(AD),
          fD = DD => {
            var zD;
            return null !== (zD = DD.displayName) && void 0 !== zD ? zD : this.translateCached(DD.nameKey)
          },
          ID = {
            compass: {
              markers: AD.map((DD => ({
                id: DD.id,
                icon: DD.icon,
                colour: DD.colour,
                name: fD(DD),
                left: DD.left
              }))),
              cardinals: rD.map((DD => {
                let {
                  name: zD,
                  bearing: wD
                } = DD;
                const pD = BD(sD.c.computeShortestRotation(cD, wD), gD);
                return {
                  name: zD,
                  left: null !== pD && void 0 !== pD ? pD : 0,
                  hidden: null === pD
                }
              })),
              label: UD ? `${fD(UD)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",ED(UD.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== pD && void 0 !== pD && pD.background) {
          const zD = DD[0] - pD.mapOrigin[0],
            wD = DD[2] - pD.mapOrigin[2],
            {
              rotation: sD,
              transform: rD
            } = function(DD, zD, wD, pD) {
              const [sD, rD] = LD(DD, zD, pD), cD = KD - wD;
              return {
                rotation: cD,
                transform: `rotate(${cD}rad) translate(-${sD}%, -${rD}%)`
              }
            }(zD, wD, cD, pD.background.bounds);
          ID.minimap = {
            transform: rD,
            iconRotation: -sD + "rad"
          };
          const [gD, RD] = LD(zD, wD, pD.background.bounds);
          ID.player = {
            left: gD,
            top: RD,
            hidden: gD < 0 || RD < 0 || gD > 100 || RD > 100,
            rotation: -sD + "rad"
          }
        }
        const {
          waypoint: GD
        } = this.quests.getSnapshot();
        if ("search" === (null === GD || void 0 === GD ? void 0 : GD.questMarkerIcon) && null !== pD && void 0 !== pD && pD.background) {
          const {
            bounds: DD
          } = pD.background, [zD, wD] = LD(GD.position[0] - pD.mapOrigin[0], GD.position[2] - pD.mapOrigin[2], DD);
          ID.searchArea = {
            left: zD,
            top: wD,
            width: 6400 / (DD.mapMaxX - DD.mapMinX),
            height: 6400 / (DD.mapMaxZ - DD.mapMinZ),
            shapeSeed: GD.nameKey
          }
        }
        const hD = this.quests.getNotificationSnapshot(),
          nD = "completion" === (null === hD || void 0 === hD ? void 0 : hD.phase) && !Xz(hD.kind);
        if (GD && !nD) {
          const zD = Math.hypot(...GD.position.map(((zD, wD) => zD - DD[wD]))),
            pD = Math.round(zD),
            sD = "talk" === GD.questMarkerIcon ? Math.min(1, Math.max(0, (10 - zD) / 5)) : 0,
            KD = wD.projectWorldPosToViewport(GD.position),
            rD = KD && wD.projectWorldPosToViewport([GD.position[0], GD.position[1] - 1, GD.position[2]]);
          ID.waypoint = {
            ...wD.projectWorldPosToScreenPos(GD.position),
            text: KD,
            nearness: sD * sD * (3 - 2 * sD),
            blockHeight: KD && rD ? rD.y - KD.y : null,
            name: this.translateCached(GD.nameKey),
            nameKey: GD.nameKey,
            markerIcon: GD.questMarkerIcon ? pw[GD.questMarkerIcon] : "quest",
            popupToken: (null === hD || void 0 === hD ? void 0 : hD.waypointNameKey) === GD.nameKey ? hD.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(pD)),
            hint: "search" === GD.questMarkerIcon && Math.hypot(GD.position[0] - DD[0], GD.position[2] - DD[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = ID, this.display.render(ID)
      }
      dispose() {
        this.MI = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Kw = "skyblockSkillsView";
    class rw extends AD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          wD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD => DD,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          sD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD => DD;
        super(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = zD, this.translate = wD, this.locale = pD, this.itemName = sD, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = DD => {
          this.selected = DD, this.emit()
        }
      }
      setTranslator(DD, zD, wD) {
        this.translate = DD, this.locale = zD, this.itemName = wD, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(DD) {
        let zD = this.skillText.get(DD);
        return zD || (zD = {
          label: this.translate(`skyblockGame:${DD}`),
          description: this.translate(`skyblockGame:${DD}Description`)
        }, this.skillText.set(DD, zD)), zD
      }
      sources(DD) {
        if ("mining" === DD || "fishing" === DD) return this.buildSources(DD);
        let zD = this.sourceText.get(DD);
        return zD || (zD = this.buildSources(DD), this.sourceText.set(DD, zD)), zD
      }
      buildSources(DD) {
        const zD = this.translate;
        return "exploration" === DD ? [zD("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), zD("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === DD ? [zD("skyblockGame:logSource", {
          xp: this.number(fz["Maple Log"])
        })] : "combat" === DD ? [zD("skyblockGame:creatureKillSource"), zD("skyblockGame:noEnvironmentalXp")] : "farming" === DD ? [zD("skyblockGame:cropSource", {
          xp: this.number(Gz["Wheat|FreshlyGrown"])
        }), zD("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), zD("skyblockGame:noYoungCropXp")] : Object.entries("mining" === DD ? Bz : hz).map((DD => {
          let [wD, pD] = DD;
          return zD("skyblockGame:itemXpSource", {
            item: this.itemName(wD),
            xp: this.number(pD)
          })
        }))
      }
      number(DD) {
        return DD.toLocaleString(this.locale)
      }
      benefit(DD, zD) {
        const wD = rz(DD, zD);
        return this.translate(wD.translationKey, {
          bonus: this.number(wD.percent)
        })
      }
      QI(DD) {
        if (!this.MI) {
          if ("snapshot" === DD.kind) this.progress = DD.progress, this.pending.clear(), this.recent = null;
          else if ("award" === DD.kind && this.progress) {
            const {
              award: zD
            } = DD;
            this.progress = {
              ...this.progress,
              [zD.skill]: zD.after
            };
            for (const [DD, pD] of this.pending) pD.skill === zD.skill && this.pending.delete(DD);
            const wD = zD.after.level > zD.before.level;
            this.recordGain(zD.skill, zD.amount, wD ? ++this.nextLevelUpToken : null), wD && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: zD.skill,
              beforeLevel: zD.before.level,
              level: zD.after.level
            })
          } else {
            if ("rejectBlock" === DD.kind) return void this.rejectBlock(DD.position);
            if ("open" === DD.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(DD, zD, wD) {
        if (!this.progress || this.MI || wD) return;
        const pD = function(DD, zD) {
          const wD = DD.split("|")[0];
          return "Air" === zD || zD === `Barkless ${DD}` ? Object.hasOwn(fz, wD) ? {
            skill: "foraging",
            amount: fz[wD]
          } : "Air" !== zD ? null : Object.hasOwn(Bz, DD) ? {
            skill: "mining",
            amount: Bz[DD]
          } : Rz(DD) ? {
            skill: "farming",
            amount: 10
          } : Uz(DD) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(Gz, DD) ? {
            skill: "farming",
            amount: Gz[DD]
          } : Object.hasOwn(ND, DD) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(zD, "Air");
        if (!pD) return;
        const sD = DD.join(",");
        if (this.pending.has(sD)) return;
        const KD = this.predictedProgress(pD.skill).totalXp + pD.amount;
        Number.isSafeInteger(KD) && (this.pending.set(sD, {
          ...pD,
          expires: this.now() + 2e3
        }), this.recordGain(pD.skill, 0), this.emit())
      }
      rejectBlock(DD) {
        this.pending.delete(DD.join(",")) && this.emit()
      }
      DU() {
        if (this.MI) return;
        let DD = !1;
        for (const [zD, wD] of this.pending) wD.expires <= this.now() && (this.pending.delete(zD), DD = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, DD = !0), DD && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(DD, zD) {
        var wD, pD;
        let sD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const KD = (null === (wD = this.recent) || void 0 === wD ? void 0 : wD.skill) === DD && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          rD = (null === (pD = this.recent) || void 0 === pD ? void 0 : pD.skill) === DD && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: DD,
          confirmed: KD + zD,
          expires: this.now() + 3e3,
          levelUpToken: null !== sD && void 0 !== sD ? sD : rD
        }
      }
      pendingXp(DD) {
        let zD = 0;
        for (const wD of this.pending.values()) wD.skill === DD && (zD += wD.amount);
        return zD
      }
      predictedProgress(DD) {
        const zD = this.progress[DD],
          wD = this.pendingXp(DD);
        return wD ? cz(zD.totalXp + wD, DD) : zD
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var DD, zD, wD;
        const pD = this.progress ? FD.map((DD => {
            const zD = this.predictedProgress(DD);
            return {
              ...this.text(DD),
              icon: nz[DD],
              benefit: this.benefit(DD, zD.level),
              sources: this.sources(DD),
              id: DD,
              selected: DD === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(zD.level)
              }),
              xp: null === zD.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(zD.xpIntoLevel),
                target: this.number(zD.xpForNextLevel)
              }),
              percent: null === zD.xpForNextLevel ? 100 : Math.min(100, zD.xpIntoLevel / zD.xpForNextLevel * 100)
            }
          })) : [],
          sD = pD.find((DD => {
            var zD;
            return DD.id === (null === (zD = this.recent) || void 0 === zD ? void 0 : zD.skill)
          })),
          KD = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: pD,
          detail: null !== (DD = pD.find((DD => DD.selected))) && void 0 !== DD ? DD : null,
          overallLevel: this.progress ? FD.reduce(((DD, zD) => DD + this.predictedProgress(zD).level), 0) : null,
          hud: sD && KD > 0 ? {
            skill: sD,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(KD)
            }),
            levelUpToken: null !== (zD = null === (wD = this.recent) || void 0 === wD ? void 0 : wD.levelUpToken) && void 0 !== zD ? zD : null,
            colour: Oz(sD.id)
          } : null
        }
      }
    }
    const Lw = Math.max(1600, 600, 950) + 400,
      gw = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Rw = "skyblockQuestsView",
      Aw = "skyblockQuestNotificationView";
    class Uw extends AD {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          rD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(DD, pD, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = zD, this.translate = wD, this.now = sD, this.locale = KD, this.publishNotification = rD, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var DD, zD;
          this.selected = null !== (DD = null === (zD = this.authoritative) || void 0 === zD ? void 0 : zD.trackedQuestId) && void 0 !== DD ? DD : null, this.show()
        }, this.select = DD => {
          this.selected = DD, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const DD = this.snapshot.detail;
          !this.MI && null !== DD && void 0 !== DD && DD.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(DD.id), this.emit())
        }, this.viewDialogue = () => {
          const DD = this.snapshot.detail;
          var zD;
          DD && (null === (zD = this.onViewDialogue) || void 0 === zD || zD.call(this, DD.id))
        }, this.notifications = new Ez(sD, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var DD, zD;
        return null !== (DD = null === (zD = this.authoritative) || void 0 === zD ? void 0 : zD.trackedQuestId) && void 0 !== DD ? DD : null
      }
      notify(DD) {
        !this.MI && this.notifications.enqueue(DD) && this.emitNotification()
      }
      setNotificationsHeld(DD) {
        (this.notifications.setHeld(DD) || DD) && this.emitNotification()
      }
      DU() {
        var DD, zD;
        if (this.MI) return;
        this.notifications.DU() && this.emitNotification();
        let wD = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, wD = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, wD = !0);
        const pD = fw(this.authoritative);
        null !== pD && void 0 !== pD && null !== (DD = pD.questClock) && void 0 !== DD && DD.running && this.clockText(pD) !== (null === (zD = this.snapshot.tracked) || void 0 === zD ? void 0 : zD.clock) && (wD = !0), wD && this.emit()
      }
      setTranslator(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = DD, this.locale = zD, this.emitNotification(), this.emit()
      }
      QI(DD) {
        if (!this.MI)
          if ("completion" === DD.kind) this.notify(DD.questCompletion);
          else if ("landmark" === DD.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: DD.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === DD.kind) {
          var zD, wD, pD;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: DD.npcNoteTitleKey,
            textKey: DD.npcNoteTextKey,
            params: null !== (zD = DD.npcNoteParams) && void 0 !== zD ? zD : {},
            nameKeys: null !== (wD = DD.npcNoteNameKeys) && void 0 !== wD ? wD : {},
            iconItem: null !== (pD = DD.npcNoteIconItem) && void 0 !== pD ? pD : null
          })
        } else if ("open" === DD.kind) this.show();
        else if ("guidance" === DD.kind) this.waypoint = DD.waypoint, this.compassTarget = DD.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === DD.kind) {
          this.authoritative = DD.snapshot, this.notifications.DU() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const zD = this.trackedStepPulse;
          this.updateTrackedStepPulse(DD.snapshot), this.emit(), this.trackedStepPulse > zD && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.MI || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var DD;
        return null !== (DD = this.translateWithIcons) && void 0 !== DD ? DD : this.translate
      }
      clockText(DD) {
        const zD = DD.questClock;
        if (!zD) return null;
        const wD = zD.elapsedMs + (zD.running ? this.now() - this.receivedAt : 0);
        return void 0 === zD.countdownFromMs ? dD(wD, !1) : dD(1e3 * Math.ceil(Math.max(0, zD.countdownFromMs - wD) / 1e3), !1)
      }
      updateTrackedStepPulse(DD) {
        var zD, wD, pD;
        const sD = fw(DD);
        if (!sD) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const KD = DD => sD.subquests.filter((zD => DD(zD.status))).map((DD => DD.id)),
          rD = KD((DD => "completed" === DD || "skipped" === DD)),
          LD = KD((DD => "locked" !== DD)),
          cD = (null === (zD = this.trackedSteps) || void 0 === zD ? void 0 : zD.questId) === sD.id && sD.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (cD) {
          const DD = rD.filter((DD => !cD.finished.has(DD))),
            zD = KD((DD => "active" === DD || "ready" === DD)).filter((DD => !cD.unlocked.has(DD)));
          DD.length > 0 && this.trackedStepPulse++, (DD.length > 0 || zD.length > 0) && (this.trackedChange = {
            finished: new Set(DD),
            unlocked: new Set(zD),
            expiresAt: this.now() + Lw
          })
        } else {
          var gD;
          this.trackedStepPulse = (null === (gD = this.trackedSteps) || void 0 === gD ? void 0 : gD.questId) === sD.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: sD.id,
          progress: sD.progress,
          finished: new Set([...null !== (wD = null === cD || void 0 === cD ? void 0 : cD.finished) && void 0 !== wD ? wD : [], ...rD]),
          unlocked: new Set([...null !== (pD = null === cD || void 0 === cD ? void 0 : cD.unlocked) && void 0 !== pD ? pD : [], ...LD])
        }
      }
      entry(DD, zD) {
        var wD, pD;
        const sD = DD.id === (null === (wD = this.authoritative) || void 0 === wD ? void 0 : wD.trackedQuestId),
          KD = this.now() < this.trackAvailableAt,
          rD = this.questTextTranslator(),
          LD = DD.subquests.map((zD => {
            var wD, pD, KD, LD, cD, gD;
            const RD = null !== (wD = zD.handInNpcName) && void 0 !== wD ? wD : DD.giverName,
              AD = this.translate("skyblockGame:progress", {
                current: zD.progress.toLocaleString(this.locale),
                target: zD.target.toLocaleString(this.locale)
              }),
              UD = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: RD ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [zD.status],
              fD = "active" === zD.status || "ready" === zD.status;
            return {
              id: zD.id,
              name: Jz(rD, zD.nameKey, zD.nameParams),
              description: Jz(rD, zD.descriptionKey, zD.descriptionParams),
              progress: AD,
              status: zD.status,
              statusLabel: UD ? this.translate(UD, {
                npc: RD
              }) : AD,
              iconItem: fD && null !== (pD = zD.questIconItem) && void 0 !== pD ? pD : null,
              barPercent: "active" === zD.status && zD.showsProgressBar ? Math.min(100, 100 * zD.progress / zD.target) : null,
              justFinished: sD && null !== (KD = null === (LD = this.trackedChange) || void 0 === LD ? void 0 : LD.finished.has(zD.id)) && void 0 !== KD && KD,
              justUnlocked: sD && null !== (cD = null === (gD = this.trackedChange) || void 0 === gD ? void 0 : gD.unlocked.has(zD.id)) && void 0 !== cD && cD
            }
          }));
        return {
          id: DD.id,
          name: Jz(rD, DD.nameKey, DD.nameParams),
          description: Jz(rD, DD.descriptionKey, DD.descriptionParams),
          progress: zD ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: DD.progress.toLocaleString(this.locale),
            target: DD.target.toLocaleString(this.locale)
          }),
          completed: zD,
          tracked: sD,
          selected: DD.id === this.selected,
          canTrack: !zD && !sD && !KD,
          trackLabel: this.translate(sD ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : KD ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== DD.id,
          subquests: LD,
          focusStep: null !== (pD = LD.find((DD => null !== DD.barPercent))) && void 0 !== pD ? pD : null,
          clock: this.clockText(DD)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var DD, zD, wD, pD, sD, KD, rD, LD, cD, gD;
        const RD = [...null !== (DD = null === (zD = this.authoritative) || void 0 === zD ? void 0 : zD.active) && void 0 !== DD ? DD : [], ...null !== (wD = null === (pD = this.authoritative) || void 0 === pD ? void 0 : pD.completed) && void 0 !== wD ? wD : []];
        var AD, UD, fD, ID;
        RD.some((DD => DD.id === this.selected)) || (this.selected = null !== (AD = null !== (UD = null === (fD = this.authoritative) || void 0 === fD ? void 0 : fD.trackedQuestId) && void 0 !== UD ? UD : null === (ID = RD[0]) || void 0 === ID ? void 0 : ID.id) && void 0 !== AD ? AD : null);
        const BD = null !== (sD = null === (KD = this.authoritative) || void 0 === KD ? void 0 : KD.active.map((DD => this.entry(DD, !1)))) && void 0 !== sD ? sD : [];
        BD.sort(((DD, zD) => Number(zD.tracked) - Number(DD.tracked)));
        const GD = null !== (rD = null === (LD = this.authoritative) || void 0 === LD ? void 0 : LD.completed.map((DD => this.entry(DD, !0)))) && void 0 !== rD ? rD : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: BD,
          completed: GD,
          completedExpanded: this.completedExpanded,
          detail: null !== (cD = [...BD, ...GD].find((DD => DD.selected))) && void 0 !== cD ? cD : null,
          tracked: null !== (gD = BD.find((DD => DD.tracked))) && void 0 !== gD ? gD : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function fw(DD) {
      var zD;
      return null !== (zD = null === DD || void 0 === DD ? void 0 : DD.active.find((zD => zD.id === DD.trackedQuestId))) && void 0 !== zD ? zD : null
    }
    const Iw = "skyblockDungeonsView";
    class Bw extends AD {
      constructor(DD, zD) {
        let wD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          pD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = zD, this.locale = wD, this.requestEnter = pD, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = DD => {
          this.selected = DD, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const DD = this.pickerEntry(),
            zD = null === DD || void 0 === DD ? void 0 : DD.difficulties[this.pageIndex];
          void 0 !== zD && null !== zD.unlockedBoss && (this.close(), this.requestEnter(DD.id, zD.difficulty))
        }
      }
      setTranslator(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = DD, this.locale = zD, this.emit()
      }
      QI(DD) {
        var zD, wD;
        if (!this.MI) return "open" === DD.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== DD.kind ? "snapshot" === DD.kind && (this.authoritative = DD.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (zD = null === (wD = this.pickerEntry()) || void 0 === wD ? void 0 : wD.difficulties.length) && void 0 !== zD ? zD : 1) - 1)), null === DD.snapshot && this.open ? this.close() : this.emit()) : this.choose(DD.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(DD) {
        var zD;
        const wD = null === (zD = this.authoritative) || void 0 === zD ? void 0 : zD.dungeons.find((zD => zD.id === DD));
        void 0 !== wD ? this.open && this.pickerDungeonId === DD || (this.pickerDungeonId = DD, this.pageIndex = Math.max(0, wD.difficulties.findLastIndex((DD => null !== DD.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${DD}`)
      }
      turnTo(DD) {
        var zD, wD;
        const pD = null !== (zD = null === (wD = this.pickerEntry()) || void 0 === wD ? void 0 : wD.difficulties.length) && void 0 !== zD ? zD : 0;
        DD < 0 || DD >= pD || DD === this.pageIndex || (this.pageIndex = DD, this.emit())
      }
      pickerEntry() {
        var DD, zD;
        return null !== (DD = null === (zD = this.authoritative) || void 0 === zD ? void 0 : zD.dungeons.find((DD => DD.id === this.pickerDungeonId))) && void 0 !== DD ? DD : null
      }
      difficulty(DD) {
        const zD = DD.completions > 0,
          wD = null === DD.bestMs ? null : dD(DD.bestMs);
        return {
          difficulty: DD.difficulty,
          label: this.translate(bD[DD.difficulty]),
          colour: jD[DD.difficulty],
          beaten: zD,
          bestTime: wD,
          completions: DD.completions,
          summary: zD ? [null === wD ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: wD
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: DD.completions.toLocaleString(this.locale)
          })].filter((DD => null !== DD)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(DD) {
        const zD = DD.difficulties.map((DD => this.difficulty(DD))),
          wD = zD.filter((DD => DD.beaten)).length;
        return {
          id: DD.id,
          name: this.translate(DD.nameKey),
          selected: DD.id === this.selected,
          beatenSummary: `${wD} / ${zD.length}`,
          difficulties: zD
        }
      }
      picker() {
        const DD = this.pickerEntry();
        if (null === DD || 0 === DD.difficulties.length) return null;
        const zD = DD.difficulties.map(((zD, wD) => {
          var pD, sD, KD, rD;
          const LD = zD.unlockedBoss,
            cD = null === LD ? this.lockedHint(DD, wD) : null;
          return {
            ...this.difficulty(zD),
            unlocked: null !== LD,
            bossName: null === LD ? null : this.translate(LD.bossNameKey),
            bossMobType: null !== (pD = null === LD || void 0 === LD ? void 0 : LD.bossMobType) && void 0 !== pD ? pD : null,
            bossMobVariation: null !== (sD = null === LD || void 0 === LD ? void 0 : LD.bossMobVariation) && void 0 !== sD ? sD : null,
            lockedHint: null !== (KD = null === cD || void 0 === cD ? void 0 : cD.text) && void 0 !== KD ? KD : null,
            lockedHintHighlight: null !== (rD = null === cD || void 0 === cD ? void 0 : cD.highlight) && void 0 !== rD ? rD : null,
            current: wD === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(DD.nameKey),
          pages: zD,
          page: zD[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < zD.length - 1
        }
      }
      lockedHint(DD, zD) {
        var wD, pD, sD;
        if (0 === zD && "number" === typeof DD.combatLevelLock) {
          const zD = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: DD.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: zD,
            colour: Oz("combat"),
            icon: nz.combat
          })
        }
        const KD = null !== (wD = null === (pD = this.authoritative) || void 0 === pD ? void 0 : pD.dungeons) && void 0 !== wD ? wD : [],
          rD = zD > 0 ? DD : null !== (sD = KD[KD.indexOf(DD) - 1]) && void 0 !== sD ? sD : null,
          LD = zD > 0 ? DD.difficulties[zD - 1] : null === rD || void 0 === rD ? void 0 : rD.difficulties[0];
        if (null === rD || void 0 === LD) return null;
        const cD = this.translate(rD.nameKey);
        if (null === LD.unlockedBoss) return rD === DD ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, LD.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: cD
        }, LD.difficulty);
        const gD = this.translate(LD.unlockedBoss.bossNameKey);
        return rD === DD ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: gD
        }, LD.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: gD,
            dungeon: cD
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(DD, zD, wD) {
        return this.hintHighlighting(DD, zD, "difficulty", {
          name: this.translate(bD[wD]),
          colour: jD[wD],
          icon: null
        })
      }
      hintHighlighting(DD, zD, wD, pD) {
        let {
          name: sD,
          colour: KD,
          icon: rD
        } = pD;
        const LD = this.translate(DD, {
          ...zD,
          [wD]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(DD, {
            ...zD,
            [wD]: sD
          }),
          highlight: 2 === LD.length ? {
            before: LD[0],
            name: sD,
            after: LD[1],
            colour: KD,
            icon: rD
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var DD, zD, wD;
        const pD = null !== (DD = null === (zD = this.authoritative) || void 0 === zD ? void 0 : zD.dungeons) && void 0 !== DD ? DD : [];
        var sD, KD;
        pD.some((DD => DD.id === this.selected)) || (this.selected = null !== (sD = null === (KD = pD[0]) || void 0 === KD ? void 0 : KD.id) && void 0 !== sD ? sD : null);
        const rD = pD.map((DD => this.entry(DD)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: rD,
          detail: null !== (wD = rD.find((DD => DD.selected))) && void 0 !== wD ? wD : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Gw = ["mining", "farming", "foraging", "fishing", "combat"],
      hw = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      nw = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Mw() {
      for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
      return zD.map(((DD, zD) => ({
        amount: DD,
        coins: hw[zD],
        xp: nw[zD]
      })))
    }
    const Ow = Mw(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Jw = Mw(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Ew = Mw(50, 100, 250, 500, 1e3, 2500, 5e3),
      Qw = Mw(25, 50, 100, 250, 500, 1e3),
      Xw = Mw(10, 25, 50, 100, 250, 500, 1e3),
      Vw = Mw(1, 5, 10, 25, 50);

    function Pw(DD, zD) {
      return {
        id: DD,
        category: "fishing",
        item: zD,
        drops: [zD],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xw
      }
    }
    const Cw = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Jw
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Ew
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Ew
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Qw
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Qw
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Jw
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Ow
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Ow
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Ow
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Ew
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Jw
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Jw
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Jw
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Ew
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Ew
      }, Pw("wheatfish", "Wheatfish"), Pw("darter", "Darter"), Pw("sunset_minnow", "Sunset Minnow"), Pw("root_flounder", "Root Flounder"), Pw("greenfin_loach", "Greenfin Loach"), Pw("red_strongfish", "Red Strongfish"), Pw("green_strongfish", "Green Strongfish"), Pw("boomerang_fish", "Boomerang Fish"), Pw("seahorse", "Seahorse"), Pw("spined_stickleback", "Spined Stickleback"), Pw("moon_strongfish", "Moon Strongfish"), Pw("boulder_bass", "Boulder Bass"), Pw("grass_snapper", "Grass Snapper"), Pw("crystal_wheatfish", "Crystalized Wheatfish", Vw), Pw("moonstone_pupfish", "Moonstone Pupfish", Vw), Pw("reedglass_minnow", "Reedglass Minnow"), Pw("mangrove_herring", "Mangrove Herring"), Pw("mudline_perch", "Mudline Perch"), Pw("coastal_mullet", "Coastal Mullet"), Pw("reef_sardine", "Reef Sardine"), Pw("root_perch", "Root Perch"), Pw("driftwood_catfish", "Driftwood Catfish"), Pw("aether_minnow", "Aether Minnow"), Pw("needlefish", "Tri-Pointed Needlefish"), Pw("threadfin_bream", "Threadfin Bream"), Pw("mudbelly_tilapia", "Mudbelly Tilapia"), Pw("rotslab_eel", "Rotslab Eel"), Pw("polarflash_electron", "Polarflash Electron"), Pw("mireback_carp", "Mireback Carp"), Pw("blackwater_bream", "Blackwater Bream"), Pw("stone_grouper", "Stone Grouper"), Pw("shadeback_ray", "Shadeback Ray"), Pw("glacial_silverfish", "Glacial Silverfish"), Pw("hatchetfish", "Hatchetfish"), Pw("moonlit_boomerang", "Moonlit Boomerang Fish"), Pw("murkborne_ray", "Murkborne Ray"), Pw("bamboo_catfish", "Bamboo Catfish"), Pw("mossback_arapaima", "Mossback Arapaima"), Pw("murk_stingray", "Murk Stingray"), Pw("channel_sawfish", "Channel Sawfish"), Pw("boned_sturgeon", "Boned Sturgeon"), Pw("oarfish", "Oarfish"), Pw("snakehead", "Snakehead", Vw), Pw("eldertide_leviathan", "Eldertide Leviathan", Vw), Pw("pithead", "Pithead"), Pw("electric_eel", "Electric Eel"), Pw("shadow_darter", "Shadow Darter"), Pw("abyss_carp", "Abyss Carp"), Pw("nomai_moray", "Nomai Moray"), Pw("silver_dragonfish", "Silver Dragonfish"), Pw("giant_moray", "Giant Moray"), Pw("coelacanth", "Coelacanth", Vw), Pw("frost_herring", "Frost Herring"), Pw("permafrost_halibut", "Permafrost Halibut"), Pw("glacial_lanternfish", "Glacial Lanternfish"), Pw("frozen_grenadier", "Frozen Grenadier"), Pw("blackfin_icefish", "Blackfin Icefish"), Pw("moonfish", "Moonfish"), Pw("alpha_strongfish", "Alpha Moon Strongfish"), Pw("deep_lanternfish", "Deepwater Lanternfish", Vw), Pw("pearlescent_moonfish", "Pearlescent Moonfish", Vw), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Jw
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Qw
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Qw
      }],
      xw = (new Map(Cw.map((DD => [DD.id, DD]))), new Map),
      Tw = new Map;
    for (const Ac of Cw) {
      for (const [DD, zD] of Object.entries(null !== (bw = Ac.blocks) && void 0 !== bw ? bw : {})) {
        var bw;
        xw.set(DD, {
          collection: Ac,
          amount: zD
        })
      }
      for (const DD of null !== (jw = Ac.drops) && void 0 !== jw ? jw : []) {
        var jw;
        Tw.set(DD, Ac)
      }
    }

    function dw(DD, zD) {
      let wD = 0;
      for (; wD < DD.tiers.length && zD >= DD.tiers[wD].amount;) wD++;
      return wD
    }
    const Sw = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function iw(DD) {
      return Sw[DD - 1]
    }
    const lw = "skyblockCollectionsView";
    class Ww extends AD {
      constructor(DD, zD) {
        let wD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          pD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD => DD;
        super(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = zD, this.locale = wD, this.itemName = pD, this.counts = null, this.category = "mining", this.selected = Cw[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = DD => {
          this.category = DD, this.selected = this.inCategory(DD)[0].id, this.emit()
        }, this.select = DD => {
          this.selected = DD, this.emit()
        }
      }
      setTranslator(DD, zD, wD) {
        this.translate = DD, this.locale = zD, this.itemName = wD, this.emit()
      }
      QI(DD) {
        if (!this.MI)
          if ("collOpen" !== DD.kind) {
            (DD.collFull || null === this.counts) && (this.counts = new Map);
            for (const [zD, wD] of DD.collCounts) this.counts.set(zD, wD);
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
        var DD;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const zD = this.inCategory(this.category).map((DD => this.collectionView(DD))),
          wD = Cw.reduce(((DD, zD) => DD + this.tierOf(zD)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Gw.map((DD => this.categoryView(DD))),
          collections: zD,
          detail: null !== (DD = zD.find((DD => DD.selected))) && void 0 !== DD ? DD : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(wD)
          })
        }
      }
      categoryView(DD) {
        const zD = this.inCategory(DD),
          wD = zD.reduce(((DD, zD) => DD + this.tierOf(zD)), 0),
          pD = zD.reduce(((DD, zD) => DD + zD.tiers.length), 0);
        return {
          id: DD,
          label: this.translate(`skyblockGame:${DD}`),
          icon: nz[DD],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(wD),
            target: this.number(pD)
          }),
          selected: DD === this.category
        }
      }
      collectionView(DD) {
        var zD, wD;
        const pD = null !== (zD = this.counts.get(DD.id)) && void 0 !== zD ? zD : 0,
          sD = dw(DD, pD),
          KD = null !== (wD = DD.tiers[sD]) && void 0 !== wD ? wD : null,
          rD = 0 === sD ? 0 : DD.tiers[sD - 1].amount;
        return {
          id: DD.id,
          name: this.itemName(DD.item),
          icon: DD.item,
          selected: DD.id === this.selected,
          locked: 0 === pD,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(pD)
          }),
          tier: 0 === sD ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(sD),
          percent: null === KD ? 100 : Math.min(100, (pD - rD) / (KD.amount - rD) * 100),
          progress: null === KD ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(pD),
            target: this.number(KD.amount)
          }),
          nextReward: null === KD ? null : this.reward(DD, KD.coins, KD.xp)
        }
      }
      reward(DD, zD, wD) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(zD),
          xp: this.number(wD),
          skill: this.translate(`skyblockGame:${DD.category}`)
        })
      }
      tierLabel(DD) {
        return this.translate("skyblockGame:collectionTier", {
          tier: iw(DD)
        })
      }
      tierOf(DD) {
        var zD;
        return dw(DD, null !== (zD = this.counts.get(DD.id)) && void 0 !== zD ? zD : 0)
      }
      inCategory(DD) {
        return Cw.filter((zD => zD.category === DD))
      }
      number(DD) {
        return DD.toLocaleString(this.locale)
      }
    }
    const Nw = "skyblockPortalTransitView",
      Zw = "skyblockPortalArrival";
    class yw {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.KG = DD, this.storage = zD, this.now = wD, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      QI(DD) {
        const zD = {
          zoneNameKey: DD.transitZoneNameKey,
          variation: DD.transitZoneVariation,
          colour: DD.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Zw, zD), this.show("departure", zD.zoneNameKey, zD.colour, DD.transitDurationMs, DD.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Zw)
        }))
      }
      resumeArrival(DD) {
        const zD = this.storage.getItem(Zw);
        this.storage.removeItem(Zw), null === zD || zD.variation !== DD || this.now() - zD.departedAt > 3e4 || this.show("arrival", zD.zoneNameKey, zD.colour, 3200, 2e4)
      }
      finishArrival(DD) {
        var zD;
        "arrival" === (null === (zD = this.view) || void 0 === zD ? void 0 : zD.phase) && this.view.token === DD && (this.clearTimer(), this.view = null, this.KG(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(DD, zD, wD, pD, sD, KD) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: DD,
          zoneNameKey: zD,
          colour: wD,
          durationMs: pD
        }, this.KG(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.KG(null), null === KD || void 0 === KD || KD()
        }), sD)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const kw = "skyblockDailyRewardView",
      mw = "skyblockDailyRewardCoin";
    class ew {
      constructor(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          cD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.KG = DD, this.isBusy = zD, this.holdQuestPopups = wD, this.onHeldCoinsChanged = pD, this.onCoinLanded = sD, this.onStarted = KD, this.onFinished = rD, this.onItemLanded = LD, this.now = cD, this.Qg = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var DD, zD;
        return null !== (DD = null === (zD = this.playing) || void 0 === zD ? void 0 : zD.view) && void 0 !== DD ? DD : null
      }
      getHeldCoins() {
        var DD, zD;
        let wD = 0;
        for (const pD of this.Qg) wD += pD.coins;
        return wD - (null !== (DD = null === (zD = this.playing) || void 0 === zD ? void 0 : zD.released) && void 0 !== DD ? DD : 0)
      }
      QI(DD) {
        "dailyRewardClaimed" !== DD.kind ? (this.queue.push(DD), this.DU()) : this.Qg.push({
          coins: DD.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      DU() {
        const DD = this.now();
        if (null === this.playing) return this.releaseUnshown(DD), void this.startNext(DD);
        const zD = this.playing,
          wD = DD - zD.startedAt,
          pD = zD.view.flyingCoins,
          sD = function(DD, zD) {
            let wD = 0;
            for (; wD < zD && aw(wD, zD) <= DD;) wD++;
            return wD
          }(wD, pD);
        if (sD !== zD.landed) {
          for (let DD = sD - zD.landed > 2 ? sD - 1 : zD.landed; DD < sD; DD++) this.onCoinLanded(DD, pD);
          zD.landed = sD, zD.released = Math.round(zD.view.coins * sD / pD), this.onHeldCoinsChanged()
        }
        for (; zD.itemsLanded < zD.view.items.length && 2e3 + 160 * zD.itemsLanded + 630 <= wD;) this.onItemLanded(zD.itemsLanded), zD.itemsLanded++;
        wD >= zD.view.durationMs && (this.finish(), this.startNext(DD))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Qg = [], this.KG(null)
      }
      startNext(DD) {
        if (0 === this.queue.length || this.isBusy()) return;
        const zD = this.queue.shift();
        this.token++;
        const wD = {
          token: this.token,
          day: zD.dailyRewardDay,
          coins: zD.dailyRewardCoins,
          items: zD.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: zD.dailyRewardDay === CD ? 24 : 14
        };
        this.playing = {
          view: wD,
          startedAt: DD,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.KG(wD), this.onStarted(wD)
      }
      finish() {
        this.Qg.shift(), this.playing = null, this.holdQuestPopups(!1), this.KG(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(DD) {
        if (this.queue.length > 0 || 0 === this.Qg.length) return;
        const zD = this.Qg.length;
        this.Qg = this.Qg.filter((zD => DD - zD.receivedAt < 6e4)), this.Qg.length !== zD && this.onHeldCoinsChanged()
      }
    }

    function ow(DD, zD) {
      return 450 + 715 * DD / (zD - 1)
    }

    function aw(DD, zD) {
      return ow(DD, zD) + 650
    }
    const uw = "skyblockMailboxView";
    class vw {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.KG = DD, this.isBusy = zD, this.onStarted = wD, this.now = pD, this.waiting = [], this.playing = null, this.token = 0, this.itemName = DD => DD
      }
      getSnapshot() {
        var DD, zD;
        return null !== (DD = null === (zD = this.playing) || void 0 === zD ? void 0 : zD.view) && void 0 !== DD ? DD : null
      }
      setItemName(DD) {
        this.itemName = DD
      }
      QI(DD) {
        this.waiting.push(...DD.mailLetters), this.DU()
      }
      DU() {
        const DD = this.now();
        null !== this.playing && DD - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.KG(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(DD)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.KG(null)
      }
      start(DD) {
        const zD = this.waiting.slice(0, 3);
        this.token++;
        const wD = {
          token: this.token,
          letters: zD.map((DD => this.toView(DD))),
          more: this.waiting.length - zD.length,
          durationMs: 4500 + 700 * zD.length
        };
        this.waiting = [], this.playing = {
          view: wD,
          startedAt: DD
        }, this.KG(wD), this.onStarted(wD)
      }
      toView(DD) {
        return {
          coins: DD.mailCoins,
          items: DD.mailItems.map((DD => {
            var zD;
            return {
              itemName: DD.mailItemName,
              amount: DD.mailItemAmount,
              label: null !== (zD = DD.mailItemLabel) && void 0 !== zD ? zD : this.itemName(DD.mailItemName)
            }
          })),
          reasonKey: DD.mailReasonKey,
          reasonParams: DD.mailReasonParams
        }
      }
    }
    const tw = "skyblockQuestGraphView",
      Fw = "skyblockDevQuestJump";

    function Yw(DD) {
      if (0 === DD.length) return "";
      const zD = [`M ${DD[0].x} ${DD[0].y}`];
      for (let pD = 1; pD < DD.length - 1; pD++) {
        const wD = DD[pD + 1];
        zD.push(`Q ${DD[pD].x} ${DD[pD].y} ${(DD[pD].x+wD.x)/2} ${(DD[pD].y+wD.y)/2}`)
      }
      const wD = DD[DD.length - 1];
      return zD.push(`L ${wD.x} ${wD.y}`), zD.join(" ")
    }

    function Hw(DD, zD) {
      return DD < zD ? `${DD}|${zD}` : `${zD}|${DD}`
    }
    class qw extends AD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(DD, wD, pD), this.translate = zD, this.requestJump = sD, this.requestArrive = KD, this.storage = rD, this.now = LD, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = DD => {
          DD !== this.hoveredId && (this.hoveredId = DD, this.emit())
        }, this.jump = DD => {
          this.close(), this.requestJump(DD)
        }
      }
      QI(DD) {
        if (!this.MI)
          if ("graph" !== DD.kind) {
            if ("jumping" === DD.kind) {
              const zD = {
                questId: DD.graphQuestId,
                variation: DD.graphVariation,
                completes: DD.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Fw, zD)
            }
          } else {
            const zD = ++this.graphCount;
            wD.e(118).then((() => wD(6486))).then((wD => {
              let {
                default: pD
              } = wD;
              this.MI || zD !== this.graphCount || (this.layout = function(DD, zD, wD) {
                var pD, sD;
                const KD = new DD.graphlib.Graph;
                KD.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), KD.setDefaultEdgeLabel((() => ({})));
                const rD = new Set;
                for (const RD of zD) rD.add(RD.graphQuestId), KD.setNode(RD.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const LD = wD.filter((DD => rD.has(DD.graphFromId) && rD.has(DD.graphToId) && DD.graphFromId !== DD.graphToId)),
                  cD = new Map;
                for (const RD of [...LD].sort(((DD, zD) => Number("awaits" === DD.graphEdgeKind) - Number("awaits" === zD.graphEdgeKind)))) {
                  const DD = Hw(RD.graphFromId, RD.graphToId);
                  cD.has(DD) || (cD.set(DD, RD), KD.setEdge(RD.graphFromId, RD.graphToId))
                }
                DD.layout(KD);
                const gD = KD.graph();
                return {
                  width: Math.ceil(null !== (pD = gD.width) && void 0 !== pD ? pD : 0),
                  height: Math.ceil(null !== (sD = gD.height) && void 0 !== sD ? sD : 0),
                  nodes: zD.map((DD => {
                    var zD, wD;
                    const pD = KD.node(DD.graphQuestId);
                    return {
                      node: DD,
                      left: (null !== (zD = pD.x) && void 0 !== zD ? zD : 0) - 95,
                      top: (null !== (wD = pD.y) && void 0 !== wD ? wD : 0) - 26
                    }
                  })),
                  edges: LD.map((DD => {
                    var zD;
                    const wD = cD.get(Hw(DD.graphFromId, DD.graphToId)),
                      pD = null !== (zD = KD.edge(wD.graphFromId, wD.graphToId).points) && void 0 !== zD ? zD : [];
                    return {
                      edge: DD,
                      key: `${DD.graphFromId}|${DD.graphToId}|${DD.graphEdgeKind}`,
                      path: Yw(wD.graphFromId === DD.graphFromId ? pD : [...pD].reverse())
                    }
                  })),
                  plans: new Map(zD.map((DD => [DD.graphQuestId, new Set([DD.graphQuestId, ...DD.graphPlanIds])])))
                }
              }(pD, DD.graphNodes, DD.graphEdges), this.show())
            })).catch((DD => {
              console.error("The quest graph could not be laid out", DD)
            }))
          }
      }
      resumeJump(DD) {
        const zD = this.storage.getItem(Fw);
        this.storage.removeItem(Fw), null === zD || zD.variation !== DD || this.now() - zD.departedAt > 6e4 || this.requestArrive(zD.questId, zD.completes)
      }
      setTranslator(DD) {
        this.translate = DD, this.emit()
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
        var DD, zD;
        return null !== (DD = null === this.hoveredId || null === (zD = this.layout) || void 0 === zD ? void 0 : zD.plans.get(this.hoveredId)) && void 0 !== DD ? DD : new Set
      }
      buildSnapshot() {
        const DD = this.layout;
        if (null === DD) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const zD = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: DD.width,
          height: DD.height,
          nodes: DD.nodes.map((DD => {
            let {
              node: wD,
              left: pD,
              top: sD
            } = DD;
            return {
              id: wD.graphQuestId,
              name: this.translate(wD.graphNameKey),
              detail: null === wD.graphGiverName ? wD.graphZoneId : `${wD.graphGiverName} \xb7 ${wD.graphZoneId}`,
              state: wD.graphState,
              left: pD,
              top: sD,
              inPlan: zD.has(wD.graphQuestId),
              hovered: wD.graphQuestId === this.hoveredId
            }
          })),
          edges: DD.edges.map((DD => {
            let {
              edge: wD,
              key: pD,
              path: sD
            } = DD;
            return {
              key: pD,
              kind: wD.graphEdgeKind,
              path: sD,
              inPlan: zD.has(wD.graphFromId) && zD.has(wD.graphToId)
            }
          })),
          planning: zD.size > 0
        }
      }
    }
    var Dp = wD(37043);
    const zp = 250,
      wp = 2150,
      pp = -2.8,
      sp = 2.2,
      Kp = -27,
      rp = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      Lp = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      cp = Math.round(50 + 1e3 * (Lp.delay + Lp.period / 2)),
      gp = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      Rp = Array.from({
        length: 26
      }, ((DD, zD) => {
        const wD = 2.39996 * zD,
          pD = .5 + .618034 * zD % 1 * .23,
          sD = zD % 3 !== 2;
        return {
          rune: sD ? gp[7 * zD % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(wD)*pD).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(wD)*pD).toFixed(3)})`,
            "--spin": 40 * (zD % 5 - 2) + "deg",
            "--size": (sD ? 1 + zD % 4 * .2 : .3 + zD % 2 * .15) + "rem",
            "--duration": `${(1.8+7*zD%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*zD%3).toFixed(2)}s`
          }
        }
      }));

    function Ap(DD, zD) {
      return Array.from({
        length: 30 + 3 * DD + (zD ? 10 : 0)
      }, ((DD, zD) => {
        const wD = zD < 4,
          pD = wD ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          sD = wD ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          KD = wD ? 2.2 : .6 + Math.random(),
          rD = wD ? .3 : Math.random() < .5 ? .16 : .24,
          LD = wD ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": pD,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${sD.toFixed(2)}rem`,
          "--length": `${KD.toFixed(2)}rem`,
          "--width": `${rD}rem`,
          "--duration": `${Math.round(LD)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Up(DD) {
      let {
        zeta: zD,
        period: wD
      } = DD;
      const pD = 2 * Math.PI / wD;
      return {
        w: pD,
        decay: zD * pD / Math.sqrt(1 - zD * zD)
      }
    }
    let fp = !1;

    function Ip() {
      if (fp) return;
      fp = !0;
      const DD = document.createElement("style");
      DD.textContent = function() {
        const DD = Up(rp),
          zD = Up(Lp),
          wD = zD => Math.exp(-DD.decay * zD) * Math.sin(DD.w * zD),
          pD = wD(Math.atan(DD.w / DD.decay) / DD.w),
          sD = .25,
          KD = 2.15,
          rD = Math.round(215),
          LD = [];
        for (let cD = 0; cD <= rD; cD++) {
          const DD = cD / rD * KD;
          let gD = Math.sin(Math.min(DD, sD) / sD * Math.PI / 2) ** 2,
            RD = 0,
            AD = 1,
            UD = 1 - .2 * gD,
            fD = 1;
          if (DD >= sD) {
            const rD = DD - sD,
              LD = Math.max(0, rD - .05);
            gD = Math.exp(-LD / .05), RD = wD(LD + rp.lead * (1 - Math.exp(-LD / rp.rush))) / pD;
            const cD = LD - Lp.delay,
              ID = cD <= 0 ? 0 : 1 - Math.exp(-zD.decay * cD) * (Math.cos(zD.w * cD) + zD.decay / zD.w * Math.sin(zD.w * cD)),
              BD = Math.max(0, (DD - 1.77) / (KD - 1.77));
            AD = (1 + (Lp.to - 1) * ID) * (1 + .08 * BD), UD = 1.1 + 1.5 * Math.exp(-rD / .07) + .3 * Math.exp(-(((1e3 * rD - cp) / 100) ** 2)) + .8 * BD, fD = 1 - BD ** 1.5
          }
          const ID = .15 * gD + pp * RD,
            BD = -.1 * gD + sp * RD,
            GD = 3 * gD + Kp * RD;
          LD.push(`${(cD/rD*100).toFixed(3)}% { opacity: ${fD.toFixed(3)}; transform: translate(${ID.toFixed(3)}rem, ${BD.toFixed(3)}rem) rotate(${GD.toFixed(2)}deg) scale(${AD.toFixed(3)}); filter: brightness(${UD.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${LD.join(" ")} }`
      }(), document.head.append(DD)
    }
    const Bp = "skyblockForgeView",
      Gp = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class hp extends AD {
      constructor(DD, zD, wD, pD, sD) {
        super(DD, wD, pD), this.translate = zD, this.requestForge = sD, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (DD, zD) => {
          var wD, pD;
          null !== this.forging || (null !== (wD = this.owned[(0, Dp.p)(zD, DD)]) && void 0 !== wD ? wD : 0) <= 0 || (this.selected[DD] = this.selected[DD] === zD ? null : zD, this.status = null, null === (pD = this.onPartSelected) || void 0 === pD || pD.call(this), this.emit())
        }, this.forge = DD => {
          var zD, wD;
          const pD = this.selectedParts();
          if (null === pD || this.isPending() || !this.open) return;
          const sD = (0, Dp.l)(pD);
          if (null === sD || sD.coalCost > this.coal) return;
          const KD = this.preview(sD),
            rD = null !== (zD = null === (wD = this.onForgeStarted) || void 0 === wD ? void 0 : wD.call(this, KD.tier, KD.named, DD)) && void 0 !== zD ? zD : () => {};
          if (this.dropArrival(), DD) {
            const DD = {
              id: ++this.forgeId,
              preview: KD,
              timers: [],
              stopSounds: rD,
              landed: !1,
              reply: null
            };
            DD.timers.push(setTimeout((() => {
              DD.landed = !0, null !== DD.reply && (this.apply(DD.reply), DD.reply = null, this.emit())
            }), zp), setTimeout((() => {
              this.finishForge(DD)
            }), wp)), this.forging = DD
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(pD)
        }, this.snapshot = this.buildSnapshot()
      }
      QI(DD) {
        var zD;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === DD.forgeMessageKind) return this.dropForge(), this.apply(DD), this.status = null, this.show(), void(null === (zD = this.onOpened) || void 0 === zD || zD.call(this));
        const wD = this.forging;
        if (null !== wD && null !== DD.forgeRefusalKey) this.dropForge();
        else if (null !== wD && !wD.landed) return void(wD.reply = DD);
        this.apply(DD), this.emit()
      }
      apply(DD) {
        if (this.owned = DD.forgeOwnedParts, this.coal = DD.forgeCoalOwned, this.keepSelectionOwned("open" === DD.forgeMessageKind), null !== DD.forgeForgedSwordId) {
          var zD;
          const wD = (0, Dp.l)(DD.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (zD = null === wD || void 0 === wD ? void 0 : wD.displayName) && void 0 !== zD ? zD : ""
            }
          }
        } else null !== DD.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: DD.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(DD) {
        this.translate = DD, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(DD) {
        var zD;
        this.forging = null;
        const wD = this.selectedParts(),
          pD = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: DD.id,
          sameSword: null !== wD && (null === (zD = (0, Dp.l)(wD)) || void 0 === zD ? void 0 : zD.displayName) === DD.preview.name,
          timer: pD
        }, this.emit()
      }
      dropForge() {
        const DD = this.forging;
        if (null !== DD) {
          this.forging = null;
          for (const zD of DD.timers) clearTimeout(zD);
          DD.stopSounds(), null !== DD.reply && this.apply(DD.reply)
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
        var DD, zD, wD;
        const pD = this.selectedParts(),
          sD = null === pD ? null : (0, Dp.l)(pD),
          KD = null !== (DD = null === (zD = this.forging) || void 0 === zD ? void 0 : zD.preview) && void 0 !== DD ? DD : null === sD ? null : this.preview(sD);
        return {
          enabled: this.received,
          open: this.open,
          slots: Dp.j.map((DD => ({
            kind: DD,
            label: this.translate(Gp[DD]),
            parts: this.partsFor(DD)
          }))),
          coalOwned: this.coal,
          preview: KD,
          unformedSword: Dp.g[null !== (wD = this.selected.Blade) && void 0 !== wD ? wD : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((DD => DD > 0)),
          canForge: null !== KD && !KD.coalShort && !this.isPending(),
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
      preview(DD) {
        return {
          name: DD.displayName,
          lore: DD.lore,
          baseSword: DD.baseSword,
          enchantmentTier: DD.enchantmentTier,
          tier: Number(DD.enchantmentTier.slice(-1)),
          named: DD.named,
          stats: this.stats(DD),
          effects: DD.effects,
          coalCost: DD.coalCost,
          coalShort: null === this.forging && DD.coalCost > this.coal
        }
      }
      partsFor(DD) {
        const zD = [];
        for (const pD of Dp.e) {
          var wD;
          const sD = (0, Dp.p)(pD, DD),
            KD = null !== (wD = this.owned[sD]) && void 0 !== wD ? wD : 0;
          KD > 0 && zD.push({
            material: pD,
            itemName: sD,
            owned: KD,
            selected: this.selected[DD] === pD,
            placeholder: !1
          })
        }
        if (0 === zD.length) {
          const wD = Dp.e[0];
          zD.push({
            material: wD,
            itemName: (0, Dp.p)(wD, DD),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return zD
      }
      stats(DD) {
        const zD = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${DD.powerMultiplier.toFixed(2)}`,
          better: DD.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${DD.damageMultiplier.toFixed(2)}`,
          better: DD.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/DD.cooldownMultiplier).toFixed(2)}`,
          better: DD.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${DD.knockbackMultiplier.toFixed(2)}`,
          better: DD.knockbackMultiplier > 1
        }];
        return DD.reachBonus > 0 && zD.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${DD.reachBonus.toFixed(1)}`,
          better: !0
        }), DD.damageReduction > 0 && zD.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*DD.damageReduction)}%`,
          better: !0
        }), zD
      }
      selectedParts() {
        const {
          Blade: DD,
          Guard: zD,
          Handle: wD
        } = this.selected;
        return null === DD || null === zD || null === wD ? null : {
          blade: DD,
          guard: zD,
          handle: wD
        }
      }
      keepSelectionOwned(DD) {
        for (const wD of Dp.j) {
          var zD;
          const pD = this.selected[wD];
          if (null !== pD && (null !== (zD = this.owned[(0, Dp.p)(pD, wD)]) && void 0 !== zD ? zD : 0) > 0) continue;
          if (!DD) {
            this.selected[wD] = null;
            continue
          }
          const sD = [...Dp.e].reverse().find((DD => {
            var zD;
            return (null !== (zD = this.owned[(0, Dp.p)(DD, wD)]) && void 0 !== zD ? zD : 0) > 0
          }));
          this.selected[wD] = null !== sD && void 0 !== sD ? sD : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const np = "skyblockSmugglerView",
      Mp = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Op extends AD {
      constructor(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(DD, wD, pD), this.translate = zD, this.requestBuy = sD, this.now = KD, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = DD => DD, this.onBought = null, this.buy = DD => {
          const zD = this.deals[DD];
          void 0 !== zD && !this.isPending() && this.open && !this.soldOut.has(DD) && this.canAfford(zD) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, DD))
        }, this.snapshot = this.buildSnapshot()
      }
      QI(DD) {
        if (this.received = !0, this.day = DD.smugglerDay, this.deals = DD.smugglerDeals, this.rivets = DD.smugglerRivetsOwned, this.crests = DD.smugglerCrestsOwned, this.soldOut = new Set(DD.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + DD.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === DD.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = DD.smugglerBoughtSlot, null !== DD.smugglerBoughtSlot) {
          var zD, wD;
          const pD = this.deals[DD.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === pD ? "" : this.dealName(pD),
              amount: String(null !== (zD = null === pD || void 0 === pD ? void 0 : pD.smugglerDealAmount) && void 0 !== zD ? zD : 0)
            }
          }, this.boughtCount++, null === (wD = this.onBought) || void 0 === wD || wD.call(this)
        } else null !== DD.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: DD.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(DD, zD, wD) {
        this.translate = DD, void 0 !== wD && (this.itemName = wD), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(DD) {
        if (null !== DD.smugglerDealUniqueName) return DD.smugglerDealUniqueName;
        const zD = Mp[DD.smugglerDealItem];
        return void 0 === zD ? this.itemName(DD.smugglerDealItem) : this.translate(zD)
      }
      canAfford(DD) {
        return DD.smugglerDealRivets <= this.rivets && DD.smugglerDealCrests <= this.crests
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
        const DD = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return DD <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : DD < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(DD)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(DD / 60)),
          minutes: String(DD % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((DD, zD) => ({
            slot: zD,
            itemName: DD.smugglerDealItem,
            displayName: this.dealName(DD),
            enchantmentTier: DD.smugglerDealEnchantmentTier,
            amount: DD.smugglerDealAmount,
            rivets: DD.smugglerDealRivets,
            crests: DD.smugglerDealCrests,
            affordable: this.canAfford(DD),
            soldOut: this.soldOut.has(zD),
            justBought: this.boughtSlot === zD
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
    const Jp = "skyblockPassageView",
      Ep = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function Qp(DD, zD) {
      return DD(Ep[zD])
    }

    function Xp(DD, zD, wD, pD) {
      const sD = Math.ceil((wD - pD) / 864e5),
        KD = Qp(DD, zD);
      return sD > 1 ? DD("skyblockGame:passageNextDays", {
        phase: KD,
        days: String(sD)
      }) : DD("skyblockGame:passageNextSoon", {
        phase: KD
      })
    }
    class Vp extends AD {
      constructor(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(DD, wD, pD), this.translate = zD, this.now = sD, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = DD => DD, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      QI(DD) {
        this.message = DD, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(DD, zD, wD) {
        this.translate = DD, void 0 !== wD && (this.itemName = wD), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(DD) {
        return {
          itemName: DD.passageFish,
          displayName: this.itemName(DD.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(DD.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const DD = this.message;
        return null === DD ? {
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
          phase: DD.passagePhase,
          phaseName: Qp(this.translate, DD.passagePhase),
          visitors: DD.passageVisitors.map((DD => this.describe(DD))),
          resting: this.describe(DD.passageResting),
          nextPhase: DD.passageNextPhase,
          next: Xp(this.translate, DD.passageNextPhase, DD.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var Pp = wD(38533);
    const Cp = "skyblockKeepersChairView";
    class xp extends AD {
      constructor(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new Pp.d;
        super(DD, wD, pD), this.translate = zD, this.requestAim = sD, this.now = KD, this.pacer = rD, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = DD => DD, this.aim = DD => {
          !this.awaitingReply && this.open && this.atChair && DD !== this.favoured && (null === DD || this.islands.some((zD => zD.keepersChairIslandId === DD && zD.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== DD && void 0 !== DD ? DD : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = rD.subscribe((() => {
          this.emit()
        }))
      }
      QI(DD) {
        var zD, wD;
        this.received = !0;
        const pD = this.favoured,
          sD = this.atChair;
        var KD;
        return this.islands = DD.keepersChairIslands, this.favoured = DD.keepersChairFavoured, this.passage = null !== (zD = DD.keepersChairPassage) && void 0 !== zD ? zD : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (wD = DD.keepersChairAtChair) || void 0 === wD || wD, "place" === DD.keepersChairMessageKind ? (!sD && this.atChair && "refused" === (null === (KD = this.status) || void 0 === KD ? void 0 : KD.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === DD.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== DD.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: DD.keepersChairRefusalKey,
          island: null
        } : this.favoured !== pD && (this.status = null === this.favoured ? {
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
      receivePassage(DD) {
        this.received && (this.passage = DD, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(DD, zD, wD) {
        this.translate = DD, void 0 !== wD && (this.itemName = wD), this.emit()
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
      islandName(DD) {
        const zD = this.islands.find((zD => zD.keepersChairIslandId === DD));
        return void 0 === zD ? DD : this.translate(zD.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const DD = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          zD = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((DD => {
            const zD = DD.keepersChairFeaturedFish;
            return {
              id: DD.keepersChairIslandId,
              name: this.translate(DD.keepersChairIslandNameKey),
              relit: DD.keepersChairIslandRelit,
              featuredFish: null === zD ? null : {
                itemName: zD,
                displayName: this.itemName(zD)
              },
              favoured: DD.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === DD ? null : {
            tone: DD.tone,
            text: this.translate(DD.key, null === DD.island ? void 0 : {
              island: this.islandName(DD.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === zD ? null : {
            phase: zD.keepersChairPassagePhase,
            phaseName: Qp(this.translate, zD.keepersChairPassagePhase),
            nextPhase: zD.keepersChairPassageNextPhase,
            next: Xp(this.translate, zD.keepersChairPassageNextPhase, zD.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Tp = "skyblockReachLogView",
      bp = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      jp = "Caught Fish",
      dp = [1, 2, 4];

    function Sp(DD, zD) {
      return DD.map((DD => ({
        ...DD,
        reachLogPageFish: DD.reachLogPageFish.map((DD => ({
          ...DD,
          reachLogFishFresh: zD(DD)
        })))
      })))
    }
    class ip extends AD {
      constructor(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new Pp.d;
        super(DD, wD, pD), this.translate = zD, this.requestOpen = sD, this.pacer = KD, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = DD => DD, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = DD => {
          this.pages.some((zD => zD.reachLogIslandId === DD)) && (this.selected = DD, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = KD.subscribe((() => {
          this.emit()
        }))
      }
      QI(DD) {
        if (this.received = !0, "status" === DD.reachLogMessageKind) return !0 === DD.reachLogNews && this.markNews(), this.serverFresh = DD.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const zD = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== DD.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Sp(DD.reachLogPages, (DD => DD.reachLogFishFresh || this.heldFresh.has(DD.reachLogFishItem))), this.letGoShown = DD.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, zD) this.showPages();
          else {
            for (const DD of this.pages)
              for (const zD of DD.reachLogPageFish) zD.reachLogFishFresh && this.heldFresh.add(zD.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(DD, zD, wD) {
        this.translate = DD, this.pageViews = null, void 0 !== wD && (this.itemName = wD), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Sp(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var DD, zD, wD, pD;
        const sD = this.pages.find((DD => DD.reachLogPageFish.some((DD => DD.reachLogFishFresh))));
        if (void 0 !== sD) return sD.reachLogIslandId;
        if (null !== this.selected && this.pages.some((DD => DD.reachLogIslandId === this.selected))) return this.selected;
        return null !== (DD = null !== (zD = null === (wD = this.pages.filter((DD => DD.reachLogIslandAwake)).at(-1)) || void 0 === wD ? void 0 : wD.reachLogIslandId) && void 0 !== zD ? zD : null === (pD = this.pages[0]) || void 0 === pD ? void 0 : pD.reachLogIslandId) && void 0 !== DD ? DD : null
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
        return this.pages.map((DD => {
          var zD;
          return {
            id: DD.reachLogIslandId,
            name: this.translate(DD.reachLogIslandNameKey),
            awake: DD.reachLogIslandAwake,
            gold: DD.reachLogPageGold,
            caught: DD.reachLogPageFish.filter((DD => DD.reachLogFishCaught && !DD.reachLogFishVisitor)).length,
            total: DD.reachLogPageFish.filter((DD => !DD.reachLogFishVisitor)).length,
            fish: DD.reachLogPageFish.map((DD => {
              const zD = DD.reachLogFishBestKg;
              return {
                itemName: DD.reachLogFishItem,
                name: DD.reachLogFishCaught ? this.itemName(DD.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: DD.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / DD.reachLogFishChance))
                }),
                best: DD.reachLogFishCaught ? null === zD ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: zD.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: DD.reachLogFishMarks,
                ribbons: dp.map((zD => 0 !== (DD.reachLogFishRibbons & zD))),
                glimmer: 0 !== (8 & DD.reachLogFishRibbons),
                halo: 0 !== (32 & DD.reachLogFishRibbons),
                fresh: DD.reachLogFishFresh,
                visitor: DD.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (zD = DD.reachLogPageReturner) && void 0 !== zD ? zD : null)
          }
        }))
      }
      buildReturner(DD) {
        return null === DD ? null : {
          itemName: DD.reachLogReturnerFishItem,
          line: this.translate(DD.reachLogReturnerLineKey, {
            name: this.translate(DD.reachLogReturnerNameKey),
            trinket: this.translate(DD.reachLogReturnerTrinketKey)
          }),
          back: DD.reachLogReturnerBack
        }
      }
      receivePassagePhase(DD) {
        null !== this.passagePhase && this.passagePhase !== DD && (this.pagesCurrent = !1), this.passagePhase = DD
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const lp = "skyblockLampLightView";
    class Wp {
      constructor(DD, zD, wD, pD) {
        this.KG = DD, this.translate = zD, this.requestCommand = wD, this.pacer = pD, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.MI = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = DD => {
          DD ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = DD => {
          this.send(`buy ${DD}`)
        }, this.socket = DD => {
          this.send(`socket ${null!==DD&&void 0!==DD?DD:iD}`)
        }, this.wearTint = DD => {
          this.send(`tint ${null!==DD&&void 0!==DD?DD:iD}`)
        }, this.setSituation = DD => {
          this.situation = DD, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = pD.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = pD.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      QI(DD) {
        if (this.message = DD, null !== DD.lampLightShop && (this.shop = DD.lampLightShop), "open" === DD.lampLightKind && (this.refusalKey = null), "reply" === DD.lampLightKind) {
          var zD;
          const sD = null !== (zD = DD.lampLightReplyTag) && void 0 !== zD ? zD : null,
            KD = null !== sD && sD === this.offTag;
          var wD, pD;
          if (KD ? this.settleOff() : null !== sD && sD !== this.awaitingTag || this.settleReply(), this.refusalKey = DD.lampLightRefusalKey, null !== DD.lampLightBought && !KD) this.sparkle = {
            id: DD.lampLightBought,
            count: (null !== (wD = null === (pD = this.sparkle) || void 0 === pD ? void 0 : pD.count) && void 0 !== wD ? wD : 0) + 1
          }
        }
        DD.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === DD.lampLightKind && (this.lastGained = DD.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(DD) {
        DD !== this.atChair && (this.atChair = DD, DD && (this.refusalKey = null), this.emit())
      }
      setTranslator(DD, zD) {
        this.translate = DD, this.locale = null !== zD && void 0 !== zD ? zD : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.MI = !0
      }
      send(DD) {
        var zD;
        if (null !== this.awaitingTag || "ready" !== (null === (zD = this.message) || void 0 === zD ? void 0 : zD.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const wD = this.nextTag();
        this.awaitingTag = wD, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${DD} ${wD}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const DD = this.nextTag();
        this.offTag = DD, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${DD}`)
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
        this.MI || (this.snapshot = this.buildSnapshot(), this.KG(this.snapshot))
      }
      formatLight(DD) {
        return Math.floor(DD).toLocaleString(this.locale)
      }
      formatPercent(DD) {
        const zD = 100 * DD;
        return zD >= 10 ? Math.round(zD).toLocaleString(this.locale) : zD.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(DD, zD) {
        if ("bite" === DD) return this.translate("skyblockGame:lampLightBite", {
          seconds: (zD.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === DD) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(zD.lampLightRareChance)
        });
        if ("notice" === DD) return null === zD.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(zD.lampLightNoticeChance)
        });
        const wD = "meter" === DD ? zD.lampLightMeterCatches : zD.lampLightBloomCatches;
        return null === wD ? null : this.translate("meter" === DD ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(wD))
        })
      }
      oddsLines(DD, zD) {
        const wD = (DD, zD) => {
            var wD;
            return null !== (wD = {
              bite: zD.lampLightBiteMs,
              rare: zD.lampLightRareChance,
              meter: zD.lampLightMeterCatches,
              bloom: zD.lampLightBloomCatches,
              notice: zD.lampLightNoticeChance
            } [DD]) && void 0 !== wD ? wD : 0
          },
          pD = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          sD = [];
        for (const KD of ["bite", "rare", "meter", "bloom", "notice"]) {
          const rD = this.formatOdds(KD, DD),
            LD = this.formatOdds(KD, zD);
          if (null === rD || null === LD || "bite" !== KD && "rare" !== KD && rD === LD) continue;
          const cD = wD(KD, zD) - wD(KD, DD),
            gD = pD[KD] ? cD < 0 : cD > 0;
          sD.push({
            label: KD,
            before: rD,
            after: LD,
            tone: rD === LD ? "same" : gD ? "better" : "worse"
          })
        }
        return sD
      }
      charmView(DD, zD, wD) {
        const pD = DD.lampLightCharmId.charAt(0).toUpperCase() + DD.lampLightCharmId.slice(1),
          sD = "bloom" === this.situation;
        return {
          id: DD.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${pD}`),
          effect: this.translate(`skyblockGame:lampLightCharm${pD}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(DD.lampLightCharmCost)
          }),
          owned: DD.lampLightCharmOwned,
          affordable: wD >= DD.lampLightCharmCost,
          socketed: zD.lampLightSocketed === DD.lampLightCharmId,
          lines: this.oddsLines(sD ? zD.lampLightBareBloom : zD.lampLightBareOpen, sD ? DD.lampLightCharmBloom : DD.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var DD, zD, wD, pD;
        const sD = this.message,
          KD = "ready" === (null === sD || void 0 === sD ? void 0 : sD.lampLightStatus) ? this.shop : null,
          rD = null !== (DD = null === sD || void 0 === sD ? void 0 : sD.lampLightBalance) && void 0 !== DD ? DD : 0,
          LD = this.atChair,
          cD = "loading" === (null === sD || void 0 === sD ? void 0 : sD.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === sD || void 0 === sD ? void 0 : sD.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          gD = "ready" !== (null === sD || void 0 === sD ? void 0 : sD.lampLightStatus) || LD ? null !== (zD = this.refusalKey) && void 0 !== zD ? zD : cD : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== sD && "locked" !== sD.lampLightStatus,
          status: null !== (wD = null === sD || void 0 === sD ? void 0 : sD.lampLightStatus) && void 0 !== wD ? wD : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(rD)
          }),
          releasing: null !== (pD = null === sD || void 0 === sD ? void 0 : sD.lampLightReleasing) && void 0 !== pD && pD,
          gained: null === sD || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === sD || void 0 === sD ? void 0 : sD.lampLightStatus) && LD && !this.isPending(),
          situation: this.situation,
          shop: null === KD ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: KD.lampLightOddsRod,
              island: this.translate(KD.lampLightIslandNameKey)
            }),
            heldRod: null !== KD.lampLightHeldRod,
            charms: KD.lampLightCharms.map((DD => this.charmView(DD, KD, rD))),
            tints: KD.lampLightTints.map((DD => {
              const zD = DD.lampLightTintId,
                [wD, pD, sD] = DD.lampLightTintColour;
              return {
                id: zD,
                name: this.translate(`skyblockGame:lampLightTint${zD.charAt(0).toUpperCase()}${zD.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(DD.lampLightTintCost)
                }),
                owned: DD.lampLightTintOwned,
                affordable: rD >= DD.lampLightTintCost,
                wearing: KD.lampLightTint === zD,
                colour: `rgb(${wD}, ${pD}, ${sD})`
              }
            })),
            wearingIslandColours: null === KD.lampLightTint
          },
          notice: null === gD ? null : this.translate(gD),
          sparkle: this.sparkle
        }
      }
    }
    const Np = "skyblockMagmawardView";
    class Zp {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.KG = DD, this.now = zD, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = mD.map((() => 0)), this.wornAt = mD.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      QI(DD) {
        var zD, wD;
        const pD = mD.map(((zD, wD) => !0 === DD.magmawardPiecesWorn[wD]));
        if (!pD.includes(!0)) return this.snapshot = null, void this.KG(null);
        const sD = this.now(),
          KD = this.snapshot;
        null === KD && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const rD = DD.magmawardFuelCarried,
          LD = !pD.includes(!1);
        let cD = null !== (zD = null === KD || void 0 === KD ? void 0 : KD.pulse) && void 0 !== zD ? zD : null,
          gD = null !== (wD = null === KD || void 0 === KD ? void 0 : KD.flare) && void 0 !== wD ? wD : null;
        DD.magmawardFuelBurned ? (cD = "burn", gD = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = sD, this.flareAt = sD) : null !== KD && rD > KD.fuel && (cD = "gain", this.pulseToken++, this.pulseAt = sD), LD && null !== KD && !KD.fullSet && (gD = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = sD, this.setLitAt = sD);
        const RD = mD.map(((DD, zD) => (pD[zD] && null !== KD && !KD.pieces[zD].worn && (this.wornTokens[zD]++, this.wornAt[zD] = sD), {
          itemName: DD,
          worn: pD[zD],
          wornToken: this.wornTokens[zD],
          justWorn: pD[zD] && this.isPlaying(this.wornAt[zD], sD)
        })));
        this.snapshot = {
          pieces: RD,
          wornCount: pD.filter(Boolean).length,
          fullSet: LD,
          fuel: rD,
          fuelState: rD <= 0 ? "empty" : rD <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, sD) ? cD : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, sD) ? gD : null,
          flareToken: this.flareToken,
          setLit: LD && this.isPlaying(this.setLitAt, sD),
          setLitToken: this.setLitToken
        }, this.KG(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.KG(null)
      }
      isPlaying(DD, zD) {
        return zD - DD < 1200
      }
    }
    const yp = "skyblockGlowtideView";
    class kp {
      constructor(DD) {
        this.KG = DD, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = DD => {
          this.arrow = DD, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      QI(DD) {
        this.bloom = DD.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.KG(null))
      }
      afterRender(DD, zD) {
        const wD = this.bloom;
        if (null === wD || null === DD) return;
        const pD = wD.glowtideBloomX - DD[0],
          KD = wD.glowtideBloomZ - DD[2],
          rD = Math.hypot(pD, KD),
          LD = this.snapshot,
          cD = null !== LD && void 0 !== LD && LD.inRange ? 1 : 0,
          gD = rD <= 12.5 + cD && DD[1] - wD.glowtideBloomY <= 10 + cD;
        !gD || null !== LD && void 0 !== LD && LD.inRange || this.inRangeToken++;
        const RD = {
          colour: wD.glowtideBloomColour,
          inRange: gD,
          distance: Math.round(rD),
          inRangeToken: this.inRangeToken
        };
        (null === LD || RD.colour !== LD.colour || RD.inRange !== LD.inRange || !gD && RD.distance !== LD.distance) && (this.snapshot = RD, this.KG(RD));
        const AD = sD.c.computeShortestRotation(zD, (0, sD.Gb)([pD, 0, KD]));
        null === this.arrow || Math.abs(AD - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${AD}rad)`, this.arrowTurn = AD)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.KG(null)
      }
    }
    const mp = "skyblockGlowMeterView";
    class ep {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.KG = DD, this.now = zD, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      QI(DD) {
        const zD = this.now(),
          {
            glowMeterFill: wD,
            glowMeterCapacity: pD
          } = DD,
          sD = wD >= pD,
          KD = this.snapshot;
        null !== KD && (sD && !KD.full && (this.fullToken++, this.fullAt = zD), KD.full && !sD ? (this.burstToken++, this.burstAt = zD) : wD > KD.fill && (this.gainToken++, this.gainAt = zD)), this.snapshot = {
          fill: wD,
          bA: pD,
          ratio: Math.min(1, Math.max(0, wD / pD)),
          full: sD,
          rares: DD.glowMeterRares,
          ready: sD && this.isPlaying(this.fullAt, zD),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, zD),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, zD),
          gainToken: this.gainToken
        }, this.KG(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.KG(null)
      }
      isPlaying(DD, zD) {
        return zD - DD < 2e3
      }
    }
    const op = "skyblockHushWaitView";
    class ap {
      constructor(DD) {
        this.KG = DD, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      QI(DD) {
        let {
          hushWaitMs: zD,
          hushWaitTotalMs: wD,
          hushWaitLines: pD
        } = DD;
        if (this.clearTimers(), this.token++, 0 === pD.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (zD <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: pD[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const sD = Math.max(null !== wD && void 0 !== wD ? wD : zD, zD),
          KD = sD - zD,
          rD = DD => sD * DD / pD.length,
          LD = DD => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: sD,
              elapsedMs: KD,
              line: pD[DD],
              lineIndex: DD
            })
          };
        let cD = 0;
        for (; cD + 1 < pD.length && rD(cD + 1) <= KD;) cD++;
        LD(cD);
        for (let gD = cD + 1; gD < pD.length; gD++) this.later(rD(gD) - KD, (() => {
          LD(gD)
        }));
        this.later(zD, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(DD) {
        this.snapshot = DD, this.KG(DD)
      }
      later(DD, zD) {
        this.timers.push(setTimeout(zD, DD))
      }
      clearTimers() {
        for (const DD of this.timers) clearTimeout(DD);
        this.timers = []
      }
    }
    const vp = "skyblockTideChartsView",
      tp = 36e5,
      Fp = 864e5;

    function Yp(DD, zD, wD) {
      const [pD, sD, KD, rD] = DD.tideChartArea, LD = Math.floor(zD), cD = Math.floor(wD);
      return LD >= pD && LD <= KD && cD >= sD && cD <= rD
    }

    function Hp(DD, zD, wD) {
      const [pD, sD, KD, rD] = DD.tideChartWater;
      return function(DD, zD, wD, pD, sD, KD) {
        const rD = 4 - eD(Math.floor(sD) - (DD - wD), wD);
        return 5 * eD(Math.floor(KD) - (zD - pD), pD) + rD
      }(pD, sD, KD, rD, zD, wD)
    }

    function qp(DD, zD, wD) {
      const pD = DD.tideCharts;
      for (let sD = 0; sD < pD.length; sD++)
        if (Yp(pD[sD], zD, wD)) return pD[sD];
      return null
    }

    function Ds(DD, zD, wD) {
      const pD = Math.max(0, zD - wD);
      return pD > Fp ? DD("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(pD / Fp))
      }) : pD > tp ? DD("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(pD / tp))
      }) : DD("skyblockGame:tideChartsTurnSoon")
    }
    class zs extends AD {
      constructor(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(DD, wD, pD), this.translate = zD, this.now = sD, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.HU = DD => {
          this.picked = DD, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      QI(DD) {
        const zD = this.message;
        if (null !== zD)
          for (const pD of DD.tideCharts) {
            var wD;
            const DD = zD.tideCharts.find((DD => DD.tideChartIsland === pD.tideChartIsland)),
              sD = pD.tideChartLit & ~(null !== (wD = null === DD || void 0 === DD ? void 0 : DD.tideChartLit) && void 0 !== wD ? wD : 0);
            void 0 !== DD && 0 !== sD && (this.pulse = {
              island: pD.tideChartIsland,
              cells: sD,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = DD, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(DD, zD) {
        var wD;
        const pD = null === this.message || Number.isNaN(DD) ? null : qp(this.message, DD, zD),
          sD = null !== (wD = null === pD || void 0 === pD ? void 0 : pD.tideChartIsland) && void 0 !== wD ? wD : null,
          KD = null === pD ? -1 : function(DD, zD, wD) {
            const [pD, sD, KD, rD] = DD.tideChartWater;
            return function(DD, zD, wD, pD, sD, KD, rD) {
              return ((sD - DD) / (wD + rD)) ** 2 + ((KD - zD) / (pD + rD)) ** 2 <= 1
            }(pD, sD, KD, rD, zD, wD, 2) ? Hp(DD, zD, wD) : -1
          }(pD, DD, zD);
        return (sD !== this.hereIsland || KD !== this.hereCell) && (this.hereIsland = sD, this.hereCell = KD, null !== sD && (this.lastIsland = sD), !0)
      }
      afterRender(DD) {
        if (null === this.message) return;
        this.lastX = null === DD ? Number.NaN : DD[0], this.lastZ = null === DD ? Number.NaN : DD[2];
        const zD = this.locate(this.lastX, this.lastZ),
          wD = this.expirePulses();
        (zD || wD || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const DD = this.now();
        return !(!this.open || DD - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = DD, Ds(this.translate, this.message.tideChartTurnsInMs, DD - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(DD, zD) {
        const wD = null === this.message ? null : qp(this.message, DD, zD);
        if (null === wD) return;
        const pD = Hp(wD, DD, zD);
        0 === (wD.tideChartPreBlank & 1 << pD) && (this.cast = {
          island: wD.tideChartIsland,
          cell: pD,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const DD = this.now();
        let zD = !1;
        return 0 !== this.pulse.cells && DD - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, zD = !0), null !== this.cast && DD - this.cast.atMs >= 1500 && (this.cast = null, zD = !0), zD
      }
      setTranslator(DD) {
        this.translate = DD, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(DD, zD) {
        var wD;
        return null !== (wD = DD.tideCharts.find((DD => DD.tideChartIsland === zD))) && void 0 !== wD ? wD : null
      }
      describe(DD) {
        var zD, wD, pD;
        const sD = DD.tideChartIsland,
          KD = [];
        for (let fD = 0; fD < 25; fD++) {
          const zD = 1 << fD;
          0 !== (DD.tideChartLit & zD) ? KD.push("lit") : 0 !== (DD.tideChartClear & zD) ? KD.push("clear") : 0 !== (DD.tideChartPreBlank & zD) ? KD.push("shore") : KD.push("water")
        }
        const rD = function(DD) {
            let zD = 0;
            for (let wD = DD >>> 0; 0 !== wD; wD &= wD - 1) zD++;
            return zD
          }(DD.tideChartLit),
          LD = DD.tideChartInkCount,
          cD = this.translate(DD.tideChartIslandNameKey),
          gD = this.translate("skyblockGame:tideChartsLit", {
            lit: String(rD),
            ink: String(LD)
          }),
          RD = null === DD.tideChartPictureNameKey ? null : this.translate(DD.tideChartPictureNameKey),
          AD = this.hereIsland === sD && -1 !== this.hereCell ? this.hereCell : null,
          UD = [`${cD}: ${gD}.`];
        if (null !== RD && UD.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: RD
          })), null !== AD) {
          const DD = Math.floor(AD / 5) + 1,
            zD = AD % 5 + 1;
          UD.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(DD),
            column: String(zD)
          }))
        }
        return {
          island: sD,
          islandName: cD,
          cells: KD,
          hereCell: AD,
          lit: rD,
          ink: LD,
          litText: gD,
          pictureName: RD,
          gridLabel: UD.join(" "),
          pulseCells: this.pulse.island === sD ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (zD = this.cast) || void 0 === zD ? void 0 : zD.island) === sD ? this.cast.cell : null,
          castToken: null !== (wD = null === (pD = this.cast) || void 0 === pD ? void 0 : pD.token) && void 0 !== wD ? wD : 0
        }
      }
      buildSnapshot() {
        var DD, zD, wD;
        const pD = this.message;
        if (null === pD || 0 === pD.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const sD = this.findChart(pD, this.hereIsland),
          KD = null !== (DD = null !== (zD = null !== (wD = this.findChart(pD, this.open ? this.picked : null)) && void 0 !== wD ? wD : sD) && void 0 !== zD ? zD : this.findChart(pD, this.lastIsland)) && void 0 !== DD ? DD : pD.tideCharts[0],
          rD = null === sD ? null : this.describe(sD);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: rD,
          card: KD === sD ? rD : this.describe(KD),
          turnsText: Ds(this.translate, pD.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(pD.tideChartBookCount)
          }),
          tabs: pD.tideCharts.map((DD => ({
            island: DD.tideChartIsland,
            name: this.translate(DD.tideChartIslandNameKey),
            selected: DD.tideChartIsland === KD.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const ws = "skyblockRegularsView",
      ps = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      ss = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function Ks(DD, zD) {
      return "given" === DD ? zD.given : "owed" === DD ? zD.owed : zD.goal
    }
    class rs extends AD {
      constructor(DD, zD, wD, pD) {
        super(DD, wD, pD), this.translate = zD, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = DD => DD, this.openIsland = DD => {
          this.selected = DD, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = DD => {
          this.selected = DD, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      QI(DD) {
        this.message = DD, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const DD = this.openedFromReachLog;
        return this.openedFromReachLog = !1, DD
      }
      setTranslator(DD, zD, wD) {
        this.translate = DD, void 0 !== wD && (this.itemName = wD), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(DD, zD, wD) {
        return {
          text: this.translate(Ks(DD, zD), wD),
          given: "given" === DD
        }
      }
      describeRegular(DD, zD) {
        const wD = this.translate,
          pD = null !== DD.regularKg,
          sD = DD.regularMeetings,
          KD = pD ? 0 === sD ? wD("skyblockGame:regularsNotMet") : 1 === sD ? wD("skyblockGame:regularsMeetingsOne") : wD("skyblockGame:regularsMeetings", {
            count: sD
          }) : "";
        return {
          id: DD.regularId,
          name: wD(DD.regularNameKey),
          line: wD(DD.regularLineKey),
          itemName: DD.regularFishItem,
          fishName: this.itemName(DD.regularFishItem),
          tagged: pD,
          size: null === DD.regularKg ? wD("skyblockGame:regularsNotTagged") : wD("skyblockGame:regularsSize", {
            kg: DD.regularKg.toFixed(1)
          }),
          meetings: KD,
          chance: wD("skyblockGame:regularsChance", {
            count: DD.regularOneInCasts
          }),
          resting: DD.regularRestingToday,
          gifts: [{
            text: wD("skyblockGame:regularsGiftFlare"),
            given: sD >= 3
          }, this.describeGift(DD.regularTintGift, ps, {
            tint: wD(DD.regularTintNameKey)
          })],
          history: [...DD.regularHistory].reverse().map((DD => {
            const pD = DD.regularMeetingKg.toFixed(1),
              sD = zD - DD.regularMeetingDay;
            return sD <= 0 ? wD("skyblockGame:regularsToday", {
              kg: pD
            }) : wD("skyblockGame:regularsDaysAgo", {
              days: sD,
              kg: pD
            })
          }))
        }
      }
      describeIsland(DD, zD) {
        return {
          id: DD.regularsIslandId,
          name: this.translate(DD.regularsIslandNameKey),
          charm: this.describeGift(DD.regularsCharmGift, ss, {
            charm: this.translate(DD.regularsCharmNameKey)
          }),
          regulars: DD.regularsList.map((DD => this.describeRegular(DD, zD)))
        }
      }
      buildSnapshot() {
        var DD, zD, wD, pD;
        const sD = this.message;
        if (null === sD) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const KD = sD.regularsIslands.map((DD => this.describeIsland(DD, sD.regularsToday))),
          rD = null !== (DD = null !== (zD = null === (wD = KD.find((DD => DD.id === this.selected))) || void 0 === wD ? void 0 : wD.id) && void 0 !== zD ? zD : null === (pD = KD[0]) || void 0 === pD ? void 0 : pD.id) && void 0 !== DD ? DD : "";
        return {
          enabled: !0,
          open: this.open,
          selected: rD,
          islands: KD
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Ls = "skyblockHiddenWatersView";
    class cs {
      constructor(DD) {
        this.KG = DD, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      QI(DD) {
        this.snapshot = function(DD) {
          const [zD, wD] = DD.hiddenWatersMapSize, pD = (DD, pD) => ({
            left: 1 - DD / zD,
            top: pD / wD
          }), sD = new Map;
          for (const [rD, LD] of DD.hiddenWatersGlimpses) {
            var KD;
            const DD = null !== (KD = sD.get(rD)) && void 0 !== KD ? KD : [];
            DD.push(LD), sD.set(rD, DD)
          }
          return {
            found: DD.hiddenWatersFound,
            total: DD.hiddenWatersTotal,
            aspect: wD / zD,
            pins: DD.hiddenWatersPins.map((DD => {
              let [zD, wD] = DD;
              return pD(zD, wD)
            })),
            islands: DD.hiddenWatersIslands.map((DD => {
              let [sD, KD, rD, LD] = DD;
              const {
                left: cD,
                top: gD
              } = pD(rD + 1, KD);
              return {
                left: cD,
                top: gD,
                width: (rD + 1 - sD) / zD,
                height: (LD + 1 - KD) / wD
              }
            })),
            glimpses: sD
          }
        }(DD), this.KG(this.snapshot)
      }
    }
    const gs = "skyblockDialogueView";
    class Rs extends AD {
      constructor(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(DD, wD, pD), this.translate = zD, this.requestDialogue = sD, this.now = KD, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = DD => {
          this.selection = {
            kind: "quest",
            questId: DD
          }, this.request(), this.show()
        }, this.selectCharacter = DD => {
          this.selection = {
            kind: "character",
            npcId: DD
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      QI(DD) {
        this.received = !0, this.scripts = DD.questDialogueScripts, this.speakers = new Map(DD.questDialogueSpeakers.map((DD => [DD.dialogueSpeakerId, DD]))), this.emit()
      }
      setTranslator(DD) {
        this.translate = DD, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const DD = this.now();
        DD >= this.requestAvailableAt && (this.requestAvailableAt = DD + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var DD;
        const zD = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...zD,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const wD = this.selection;
        if ("quest" === wD.kind) {
          const DD = this.scripts.find((DD => DD.dialogueQuestId === wD.questId));
          return {
            ...zD,
            characters: [],
            questFocus: wD.questId,
            conversations: DD ? [this.conversation(DD)] : []
          }
        }
        const pD = [];
        for (let KD = this.scripts.length - 1; KD >= 0; KD--) {
          const DD = this.scripts[KD].dialogueLines;
          for (let zD = DD.length - 1; zD >= 0; zD--) pD.includes(DD[zD].dialogueSpeakerId) || pD.push(DD[zD].dialogueSpeakerId)
        }
        const sD = null !== wD.npcId && pD.includes(wD.npcId) ? wD.npcId : null !== (DD = pD[0]) && void 0 !== DD ? DD : null;
        return {
          ...zD,
          characters: pD.map((DD => {
            var zD, wD;
            return {
              id: DD,
              styling: null !== (zD = null === (wD = this.speakers.get(DD)) || void 0 === wD ? void 0 : wD.dialogueSpeakerStyling) && void 0 !== zD ? zD : DD,
              selected: DD === sD
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((DD => DD.dialogueLines.some((DD => DD.dialogueSpeakerId === sD)))).map((DD => this.conversation(DD))).reverse()
        }
      }
      conversation(DD) {
        let zD = null;
        return {
          questId: DD.dialogueQuestId,
          questName: this.translate(DD.dialogueQuestNameKey),
          completed: DD.dialogueQuestCompleted,
          lines: DD.dialogueLines.map(((DD, wD) => {
            var pD;
            const sD = DD.dialogueSpeakerId === zD || null === (pD = this.speakers.get(DD.dialogueSpeakerId)) || void 0 === pD ? void 0 : pD.dialogueSpeakerStyling;
            return zD = DD.dialogueSpeakerId, {
              key: wD,
              display: {
                line: {
                  translationKey: DD.dialogueLineKey,
                  params: this.params(DD.dialogueLineParams)
                },
                speakerName: sD,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(DD) {
        if (void 0 !== DD) return Object.fromEntries(Object.entries(DD).map((DD => {
          let [zD, wD] = DD;
          return [zD, "string" === typeof wD ? wD : this.translate(wD.translationKey)]
        })))
      }
    }
    var As = wD(605),
      Us = wD(1270),
      fs = wD(103);
    const Is = "skyblockAutographsView";

    function Bs(DD) {
      const zD = As.k[DD];
      return {
        label: zD.chatTag.map((DD => DD.str)).join(""),
        icon: zD.icon,
        colour: zD.mainRGB
      }
    }
    class Gs extends AD {
      constructor(DD) {
        let zD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = zD, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      QI(DD) {
        this.signatures = DD.autographSignatures, DD.autographOpen ? this.show() : this.emit()
      }
      setTranslator(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = zD, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var DD;
        const zD = null !== (DD = this.signatures) && void 0 !== DD ? DD : [],
          wD = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          pD = [...zD].sort(((DD, zD) => Number(null !== zD.autographRank) - Number(null !== DD.autographRank) || zD.autographSignedAtMs - DD.autographSignedAtMs)).map((DD => ({
            key: `${DD.autographSignedAtMs}|${DD.autographSignerName}`,
            name: (0, Us.e)(DD.autographSignerName, !fs.featureFlags.canSeeRealPlayerNames),
            rank: null === DD.autographRank ? null : Bs(DD.autographRank),
            signedOn: wD.format(DD.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: pD,
          total: pD.length,
          rankTotal: pD.filter((DD => null !== DD.rank)).length
        }
      }
    }
    const hs = "skyblockHudView",
      ns = () => {},
      Ms = {
        getItem: () => null,
        setItem: ns,
        removeItem: ns
      };
    class Os {
      constructor(DD) {
        let {
          translate: zD,
          translateWithIcons: wD,
          setMenuOpen: pD = ns,
          dismissMenu: sD = () => {
            pD(!1)
          },
          publishSkills: KD = ns,
          publishQuests: rD = ns,
          publishQuestNotification: LD = ns,
          publishDungeons: cD = ns,
          publishCollections: gD = ns,
          publishMap: RD = ns,
          publishHud: AD = ns,
          publishPortalTransit: UD = ns,
          publishDailyReward: ID = ns,
          publishMailbox: BD = ns,
          publishQuestGraph: GD = ns,
          publishForge: hD = ns,
          publishSmuggler: nD = ns,
          publishKeepersChair: MD = ns,
          publishReachLog: OD = ns,
          publishLampLight: JD = ns,
          publishMagmaward: ED = ns,
          publishGlowtide: XD = ns,
          publishGlowMeter: VD = ns,
          publishHushWait: PD = ns,
          publishPassage: CD = ns,
          publishTideCharts: xD = ns,
          publishRegulars: TD = ns,
          publishHiddenWaters: bD = ns,
          publishDialogue: jD = ns,
          publishAutographs: dD = ns,
          isLoadingScreenUp: SD = () => !1,
          onDailyRewardCoinLanded: iD = ns,
          onDailyRewardStarted: lD = ns,
          onDailyRewardFinished: WD = ns,
          onDailyRewardItemLanded: ND = ns,
          onMailboxStarted: ZD = ns,
          journeyStorage: yD = Ms,
          requestTracking: kD = ns,
          requestTravel: mD = ns,
          requestDungeonEnter: eD = ns,
          requestQuestJump: oD = ns,
          requestQuestArrive: aD = ns,
          requestForge: uD = ns,
          requestSmuggle: vD = ns,
          requestKeepersChairAim: tD = ns,
          requestReachLogOpen: FD = ns,
          requestLampLight: YD = ns,
          requestDialogue: HD = ns
        } = DD;
        this.navigation = void 0, this.map = void 0, this.compass = new QD, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new Pp.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = DD => DD, this.close = () => {
          for (const DD of this.panels) DD.close()
        }, this.setMenuOpen = pD, this.publishHud = AD, this.portalTransit = new yw(UD, yD), this.magmaward = new Zp(ED), this.glowtide = new kp(XD), this.glowMeter = new ep(VD), this.hushWait = new ap(PD), this.dailyReward = new ew(ID, (() => SD() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (DD => {
          this.quests.setNotificationsHeld(DD)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), iD, lD, WD, ND);
        const qD = DD => {
          this.panels.some((DD => DD.isOpen())) || (DD ? sD() : this.setMenuOpen(!1))
        };
        this.skills = new rw(KD, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), zD, void 0, void 0, qD), this.quests = new Uw(rD, kD, zD, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, qD, LD), this.dungeons = new Bw(cD, zD, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, qD, eD), this.collections = new Ww(gD, zD, (() => {
          this.beforePanelOpen(this.collections)
        }), qD), this.map = new fD(RD, mD, zD, (() => {
          this.beforePanelOpen(this.map)
        }), qD), this.questGraph = new qw(GD, zD, (() => {
          this.beforePanelOpen(this.questGraph)
        }), qD, oD, aD, yD), this.forge = new hp(hD, zD, (() => {
          this.beforePanelOpen(this.forge)
        }), qD, uD), this.smuggler = new Op(nD, zD, (() => {
          this.beforePanelOpen(this.smuggler)
        }), qD, vD), this.lampLight = new Wp(JD, zD, YD, this.commandPacer), this.keepersChair = new xp(MD, zD, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (DD => {
          this.lampLight.onChairClosed(), qD(DD)
        }), tD, Date.now, this.commandPacer), this.reachLog = new ip(OD, zD, (() => {
          this.beforePanelOpen(this.reachLog)
        }), qD, FD, this.commandPacer), this.passage = new Vp(CD, zD, (() => {
          this.beforePanelOpen(this.passage)
        }), qD), this.tideCharts = new zs(xD, zD, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), qD), this.regulars = new rs(TD, zD, (() => {
          this.beforePanelOpen(this.regulars)
        }), (DD => {
          this.regulars.takeReturnToReachLog() && !DD && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), qD(DD)
        })), this.hiddenWaters = new cs(bD), this.dialogue = new Rs(jD, zD, (() => {
          this.beforePanelOpen(this.dialogue)
        }), qD, HD), this.autographs = new Gs(dD, (() => {
          this.beforePanelOpen(this.autographs)
        }), qD), this.mailbox = new vw(BD, (() => SD() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), ZD), this.quests.translateWithIcons = null !== wD && void 0 !== wD ? wD : null, this.skills.onLevelUp = DD => {
          this.quests.notify(DD)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new sw(this.map, this.quests, this.compass, zD)
      }
      getHudSnapshot() {
        const DD = this.hudSnapshot,
          zD = this.dailyReward.getHeldCoins();
        return null === DD || zD <= 0 || !("hudPurseCoins" in DD) ? DD : {
          ...DD,
          hudPurseCoins: Math.max(0, DD.hudPurseCoins - zD)
        }
      }
      receiveHud(DD) {
        this.hudSnapshot = DD, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(DD) {
        this.setMenuOpen(!0);
        const zD = DD === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = DD;
        for (const wD of this.panels) wD === DD || zD && wD === this.reachLog || wD.close();
        this.openingPanel = null
      }
      setTranslator(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zD => this.resolveItemName(zD, DD);
        this.quests.translateWithIcons = null !== wD && void 0 !== wD ? wD : null, this.navigation.setTranslator(DD, zD), this.lampLight.setTranslator(DD, zD), this.mailbox.setItemName(pD);
        for (const sD of this.panels) sD.setTranslator(DD, zD, pD)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const DD of this.panels) DD.dispose()
      }
    }
    var Es = wD(1044),
      Qs = wD.n(Es),
      Xs = wD(20),
      Vs = wD(36577),
      Ps = wD(3413),
      Cs = wD(1915),
      xs = wD(1895),
      Ts = wD(34226),
      bs = wD(1200),
      ds = wD(1442),
      Ss = wD(1096);

    function is(DD) {
      let {
        controller: zD,
        minimap: wD,
        children: pD
      } = DD;
      const KD = (0, ds.k)(hs, zD.getHudSnapshot()),
        [rD, LD] = (0, VD.useState)(zD.skills.getSnapshot().overallLevel);
      (0, ds.g)(Kw, (DD => {
        LD(DD.overallLevel)
      }));
      const cD = (0, VD.useRef)(null);
      (0, ds.g)(mw, (DD => {
        ! function(DD, zD) {
          if (null === DD || "function" !== typeof DD.animate) return;
          const wD = zD ? 1.35 : 1.15;
          DD.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${wD})`
          }, {
            transform: "scale(1)"
          }], {
            duration: zD ? 320 : 160,
            easing: "ease-out"
          }), DD.classList.toggle("Receiving", !zD), zD && (DD.classList.remove("Shine"), DD.offsetWidth, DD.classList.add("Shine"))
        }(cD.current, DD)
      }));
      const {
        t: gD
      } = (0, bs.E)(), {
        isTouchScreen: RD
      } = (0, Xs.n)(["isTouchScreen"]), [AD, UD] = (0, VD.useState)(null);
      return (0, Ps.j)(AD, ".SkyblockRightHud"), null !== KD || wD ? (0, Ss.jsx)(Vs.g, {
        placement: "topRight",
        children: (0, Ss.jsxs)("div", {
          className: Qs()("SkyblockRightHud", {
            TouchScreen: RD
          }),
          children: [wD, null !== KD && (0, Ss.jsxs)("div", {
            ref: UD,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in KD ? (0, Ss.jsx)("div", {
              className: "SkyblockHudHelp",
              children: KD.hudHelpText
            }) : (0, Ss.jsxs)(Ss.Fragment, {
              children: [(0, Ss.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Ss.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Ss.jsx)("strong", {
                    style: {
                      color: sD.I.cyanUiText
                    },
                    children: gD(KD.hudZoneNameKey)
                  }), null !== rD && (0, Ss.jsx)("span", {
                    style: {
                      color: sD.I.goldUiText
                    },
                    children: gD("skyblockGame:level", {
                      level: (0, Ts.f)(rD)
                    })
                  })]
                }), (0, Ss.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: cD,
                  children: [(0, Ss.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Ss.jsx)(Cs.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Ts.f)(KD.hudPurseCoins)]
                })]
              }), KD.hudClockText.length > 0 && (0, Ss.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Ss.jsx)(xs.e, {
                  text: KD.hudClockText
                })
              })]
            }), pD, "hudZoneNameKey" in KD && (0, Ss.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function ls(DD) {
      let {
        icon: zD
      } = DD;
      const wD = (0, VD.useCallback)((DD => {
        null === DD || void 0 === DD || DD.replaceChildren(az(zD))
      }), [zD]);
      return (0, Ss.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: wD
      })
    }

    function Ws(DD) {
      let {
        controller: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)();
      return (0, Ss.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: zD.display.mountPlayer,
        title: wD("skyblockGame:mapYouAreHere"),
        children: (0, Ss.jsx)(ls, {
          icon: "player"
        })
      })
    }
    const Ns = wD(38542),
      Zs = Object.fromEntries(Ns.keys().map((DD => [DD.replace(/^\.\/(.*)\.png$/, "$1"), Ns(DD)])));

    function ys(DD, zD) {
      var wD;
      return null !== (wD = Zs[DD]) && void 0 !== wD ? wD : Zs[zD]
    }

    function ks(DD) {
      let {
        imageKey: zD,
        fallbackImageKey: wD,
        geometryKey: pD,
        alt: sD,
        className: KD
      } = DD;
      const [rD, LD] = (0, VD.useState)((() => function(DD, zD) {
        return [{
          id: 0,
          imageKey: DD,
          geometryKey: zD,
          phase: "shown"
        }]
      }(zD, pD))), cD = function(DD, zD, wD) {
        const pD = DD[DD.length - 1];
        if (pD.imageKey === zD && pD.geometryKey === wD) return DD;
        const sD = {
          id: pD.id + 1,
          imageKey: zD,
          geometryKey: wD,
          phase: "entering"
        };
        return pD.geometryKey === wD ? [{
          ...pD,
          phase: "leaving"
        }, sD] : [sD]
      }(rD, zD, pD);
      return cD !== rD && LD(cD), (0, Ss.jsx)(Ss.Fragment, {
        children: cD.map((DD => (0, Ss.jsx)("img", {
          className: Qs()("SkyblockMapTerrainImage", KD, {
            Entering: "entering" === DD.phase,
            Leaving: "leaving" === DD.phase
          }),
          src: ys(DD.imageKey, wD),
          alt: "leaving" === DD.phase ? "" : sD,
          onAnimationEnd: () => {
            LD((zD => function(DD, zD) {
              return DD.flatMap((DD => DD.id !== zD ? [DD] : "leaving" === DD.phase ? [] : [{
                ...DD,
                phase: "shown"
              }]))
            }(zD, DD.id)))
          }
        }, DD.id)))
      })
    }
    var ms = wD(4552),
      es = wD(1447);

    function os(DD) {
      if ("Tab" !== DD.key) return;
      const zD = Array.from(DD.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        wD = zD.indexOf(document.activeElement);
      var pD;
      if (DD.shiftKey && wD <= 0) DD.preventDefault(), null === (pD = zD.at(-1)) || void 0 === pD || pD.focus();
      else if (!DD.shiftKey && (-1 === wD || wD === zD.length - 1)) {
        var sD;
        DD.preventDefault(), null === (sD = zD[0]) || void 0 === sD || sD.focus()
      }
    }

    function as() {
      const DD = (0, VD.useRef)(null);
      return (0, VD.useCallback)((zD => {
        var wD;
        zD ? (DD.current = document.activeElement, zD.focus()) : null === (wD = DD.current) || void 0 === wD || wD.focus()
      }), [])
    }

    function us(DD) {
      let {
        percent: zD,
        label: wD,
        levelUpToken: pD,
        colour: sD
      } = DD;
      return (0, Ss.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": wD,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": zD,
        "aria-valuetext": wD,
        children: [(0, Ss.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${zD/100})`
          }
        }), null !== pD && void 0 !== pD && (0, Ss.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": sD
          }
        }, pD)]
      })
    }

    function vs(DD) {
      let {
        mount: zD
      } = DD;
      return (0, Ss.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: zD,
        hidden: !0,
        children: (0, Ss.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Ss.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Ss.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function ts(DD, zD, wD, pD) {
      (0, VD.useLayoutEffect)((() => {
        const sD = DD.current;
        if (!wD || null === zD || void 0 === zD || !zD.local || !sD) return;
        const KD = Array.from(sD.querySelectorAll(".SkyblockMapNode")),
          rD = [...zD.points, ...zD.portals],
          LD = () => {
            const DD = sD.clientWidth,
              wD = sD.clientHeight,
              LD = KD.map(((sD, KD) => {
                const LD = rD[KD];
                return {
                  id: LD.id,
                  portal: KD >= zD.points.length,
                  x: LD.position[0] * DD / 100,
                  y: LD.position[1] * wD / 100,
                  width: sD.offsetWidth / pD,
                  height: sD.offsetHeight / pD
                }
              })),
              cD = new Map(rD.map(((DD, zD) => [DD.id, KD[zD]])));
            for (const zD of function(DD, zD, wD) {
                const pD = [],
                  sD = [...DD].sort(((DD, zD) => Number(zD.portal) - Number(DD.portal) || DD.id.localeCompare(zD.id)));
                for (const KD of sD) {
                  const DD = DD => Math.max(KD.width / 2, Math.min(zD - KD.width / 2, DD)),
                    sD = DD => Math.max(KD.height / 2, Math.min(wD - KD.height / 2, DD)),
                    rD = [DD(KD.x)],
                    LD = [sD(KD.y)];
                  for (const zD of pD) rD.push(DD(zD.x - (zD.width + KD.width) / 2 - 4), DD(zD.x + (zD.width + KD.width) / 2 + 4)), LD.push(sD(zD.y - (zD.height + KD.height) / 2 - 4), sD(zD.y + (zD.height + KD.height) / 2 + 4));
                  let cD = {
                      ...KD,
                      x: rD[0],
                      y: LD[0]
                    },
                    gD = 1 / 0,
                    RD = 1 / 0;
                  for (const zD of new Set(rD))
                    for (const DD of new Set(LD)) {
                      let wD = 0;
                      for (const rD of pD) wD += Math.max(0, (KD.width + rD.width) / 2 + 4 - Math.abs(zD - rD.x)) * Math.max(0, (KD.height + rD.height) / 2 + 4 - Math.abs(DD - rD.y));
                      const sD = (zD - KD.x) ** 2 + (DD - KD.y) ** 2;
                      (wD < gD || wD === gD && sD < RD) && (cD = {
                        ...KD,
                        x: zD,
                        y: DD
                      }, gD = wD, RD = sD)
                    }
                  pD.push(cD)
                }
                return pD
              }(LD, DD, wD)) {
              const DD = cD.get(zD.id);
              DD.style.left = `${zD.x}px`, DD.style.top = `${zD.y}px`
            }
          };
        LD();
        const cD = new ResizeObserver(LD);
        cD.observe(sD);
        for (const DD of KD) cD.observe(DD);
        return () => {
          cD.disconnect()
        }
      }), [DD, zD, wD, pD])
    }
    const Fs = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Ys = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Hs(DD, zD, wD) {
      return Math.min(wD, Math.max(zD, DD))
    }

    function qs(DD, zD, wD) {
      const pD = Math.min(1, wD * zD / DD),
        sD = Math.min(1, DD / (wD * zD));
      return {
        x0: (1 - pD) / 2,
        y0: (1 - sD) / 2,
        x1: (1 + pD) / 2,
        y1: (1 + sD) / 2
      }
    }

    function DK(DD, zD, wD, pD) {
      const sD = zD * (pD - wD);
      if (sD <= 1) return .5 - zD * (wD + pD) / 2;
      const KD = .45 * Math.min(1, sD - 1);
      return Hs(DD, 1 - zD * pD - KD, KD - zD * wD)
    }

    function zK(DD, zD) {
      const wD = Hs(DD.zoom, 1, 12);
      return {
        zoom: wD,
        x: DK(DD.x, wD, zD.x0, zD.x1),
        y: DK(DD.y, wD, zD.y0, zD.y1)
      }
    }

    function wK(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ys;
      const KD = Hs(DD.zoom * zD, 1, 12),
        rD = KD / DD.zoom;
      return zK({
        zoom: KD,
        x: wD - (wD - DD.x) * rD,
        y: pD - (pD - DD.y) * rD
      }, sD)
    }

    function pK(DD, zD, wD, pD) {
      const [sD, KD] = (0, VD.useState)(Fs);
      (0, VD.useEffect)((() => {
        KD(Fs)
      }), [wD]), (0, VD.useEffect)((() => {
        const wD = DD.current;
        if (!zD || !wD) return;
        const sD = () => qs(wD.clientWidth, wD.clientHeight, pD),
          rD = DD => {
            const zD = wD.getBoundingClientRect();
            return {
              x: (DD.clientX - zD.left) / zD.width,
              y: (DD.clientY - zD.top) / zD.height
            }
          },
          LD = new Map;
        let cD = {
            x: 0,
            y: 0
          },
          gD = !1,
          RD = 0;
        const AD = DD => {
            DD.preventDefault();
            const zD = DD.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * DD.deltaY : DD.deltaY,
              wD = rD(DD);
            KD((DD => wK(DD, Math.exp(.0015 * -zD), wD.x, wD.y, sD())))
          },
          UD = DD => {
            "mouse" === DD.pointerType && 0 !== DD.button || (LD.set(DD.pointerId, rD(DD)), 1 === LD.size && (cD = {
              x: DD.clientX,
              y: DD.clientY
            }, gD = !1), RD = 0)
          },
          fD = DD => {
            const zD = LD.get(DD.pointerId);
            if (!zD) return;
            const pD = rD(DD);
            if (LD.set(DD.pointerId, pD), 2 === LD.size) {
              const [DD, zD] = [...LD.values()], wD = Math.hypot(DD.x - zD.x, DD.y - zD.y);
              if (RD > 0) {
                const pD = wD / RD;
                KD((wD => wK(wD, pD, (DD.x + zD.x) / 2, (DD.y + zD.y) / 2, sD())))
              }
              return RD = wD, void(gD = !0)
            }!gD && Math.hypot(DD.clientX - cD.x, DD.clientY - cD.y) < 4 || (gD || (gD = !0, wD.setPointerCapture(DD.pointerId)), KD((DD => function(DD, zD, wD) {
              let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ys;
              return zK({
                zoom: DD.zoom,
                x: DD.x + zD,
                y: DD.y + wD
              }, pD)
            }(DD, pD.x - zD.x, pD.y - zD.y, sD()))))
          },
          ID = DD => {
            LD.delete(DD.pointerId), RD = 0
          },
          BD = DD => {
            gD && (DD.stopPropagation(), DD.preventDefault(), gD = !1)
          },
          GD = new ResizeObserver((() => {
            KD((DD => zK(DD, sD())))
          }));
        return GD.observe(wD), wD.addEventListener("wheel", AD, {
          passive: !1
        }), wD.addEventListener("pointerdown", UD), wD.addEventListener("pointermove", fD), wD.addEventListener("pointerup", ID), wD.addEventListener("pointercancel", ID), wD.addEventListener("click", BD, !0), () => {
          GD.disconnect(), wD.removeEventListener("wheel", AD), wD.removeEventListener("pointerdown", UD), wD.removeEventListener("pointermove", fD), wD.removeEventListener("pointerup", ID), wD.removeEventListener("pointercancel", ID), wD.removeEventListener("click", BD, !0)
        }
      }), [DD, zD, wD, pD]);
      return {
        view: sD,
        zoomBy: zD => {
          const wD = DD.current;
          wD && KD((DD => wK(DD, zD, .5, .5, qs(wD.clientWidth, wD.clientHeight, pD))))
        }
      }
    }

    function sK(DD) {
      var zD, wD, pD, sD;
      let {
        controller: KD,
        navigation: rD
      } = DD;
      const LD = (0, ds.k)(UD, KD.getSnapshot()),
        {
          t: cD
        } = (0, bs.E)(),
        gD = as(),
        RD = LD.presentation,
        AD = (0, VD.useRef)(null),
        fD = (0, VD.useRef)(null),
        ID = Boolean(LD.open && (null === RD || void 0 === RD ? void 0 : RD.local) && RD.background),
        BD = pK(AD, ID, `${LD.open}|${LD.tab}|${null===RD||void 0===RD||null===(zD=RD.background)||void 0===zD?void 0:zD.geometryKey}`, null !== (wD = null === RD || void 0 === RD || null === (pD = RD.background) || void 0 === pD ? void 0 : pD.ratio) && void 0 !== wD ? wD : 2);
      if (ts(fD, RD, LD.open, BD.view.zoom), !RD || !LD.open) return null;
      const GD = RD.local ? RD.background : null,
        hD = {
          "--map-ratio": String(null !== (sD = null === GD || void 0 === GD ? void 0 : GD.ratio) && void 0 !== sD ? sD : 2),
          backgroundColor: null === GD || void 0 === GD ? void 0 : GD.colour
        },
        nD = {
          "--map-zoom": String(BD.view.zoom),
          transform: `translate(${100*BD.view.x}%, ${100*BD.view.y}%) scale(${BD.view.zoom})`
        };
      return (0, Ss.jsx)(ms.c, {
        show: LD.open,
        close: KD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: gD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Ss.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockMapTitle",
                children: cD("skyblockGame:map")
              }), RD.minimap && (0, Ss.jsx)("p", {
                children: RD.minimap.caption
              })]
            }), (0, Ss.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((DD => (0, Ss.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": DD === LD.tab ? "true" : void 0,
                className: Qs()({
                  Selected: DD === LD.tab
                }),
                "aria-pressed": DD === LD.tab,
                onClick: () => {
                  KD.selectTab(DD)
                },
                children: cD("local" === DD ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, DD)))
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              onClick: KD.dismiss
            })]
          }), (0, Ss.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Ss.jsxs)("div", {
              ref: AD,
              className: Qs()("SkyblockMapCanvas", {
                Local: RD.local,
                Overview: !RD.local,
                Zoomed: BD.view.zoom > 1
              }),
              style: hD,
              children: [(0, Ss.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: ID ? nD : void 0,
                children: (0, Ss.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: fD,
                  children: [GD && (0, Ss.jsx)(ks, {
                    className: "SkyblockMapTerrain",
                    imageKey: GD.imageKey,
                    fallbackImageKey: GD.fallbackImageKey,
                    geometryKey: GD.geometryKey,
                    alt: GD.label
                  }), RD.local && (0, Ss.jsx)(vs, {
                    mount: rD.display.mountMapSearchArea
                  }), !RD.local && (0, Ss.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: RD.connections.map((DD => (0, Ss.jsx)("line", {
                      className: Qs()({
                        Explored: DD.explored
                      }),
                      x1: DD.start[0],
                      y1: DD.start[1],
                      x2: DD.end[0],
                      y2: DD.end[1]
                    }, DD.id)))
                  }), RD.points.map((DD => {
                    const zD = !RD.local && DD.thumbnail ? Zs[DD.thumbnail] : void 0;
                    return (0, Ss.jsxs)("div", {
                      className: Qs()("SkyblockMapNode", {
                        Current: DD.current
                      }),
                      style: {
                        left: `${DD.position[0]}%`,
                        top: `${DD.position[1]}%`
                      },
                      children: [(0, Ss.jsxs)(es.f, {
                        className: Qs()("SkyblockMapPin", {
                          Unknown: !DD.visited,
                          Current: DD.current
                        }),
                        disabled: LD.pending,
                        onClick: () => {
                          KD.travel(DD.travelKind, DD.travelId)
                        },
                        children: [zD && (0, Ss.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: zD,
                          alt: ""
                        }), !zD && (0, Ss.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Ss.jsx)(ls, {
                            icon: DD.icon
                          })
                        }), (0, Ss.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: DD.name
                        })]
                      }), DD.current && (0, Ss.jsx)("span", {
                        className: Qs()("SkyblockMapHereBadge", {
                          Above: DD.position[1] > 50
                        }),
                        children: cD("skyblockGame:mapYouAreHere")
                      })]
                    }, DD.id)
                  })), RD.portals.map((DD => (0, Ss.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${DD.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${DD.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Ss.jsxs)(es.f, {
                      className: "SkyblockMapPin",
                      disabled: LD.pending,
                      onClick: () => {
                        KD.travel(DD.travelKind, DD.travelId)
                      },
                      children: [(0, Ss.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: DD.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Ss.jsx)(ls, {
                          icon: DD.icon
                        })
                      }), (0, Ss.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: DD.name
                      })]
                    })
                  }, DD.id))), RD.local && (0, Ss.jsx)(Ws, {
                    controller: rD
                  })]
                })
              }), ID && (0, Ss.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Ss.jsx)("button", {
                  type: "button",
                  "aria-label": cD("skyblockGame:mapZoomIn"),
                  disabled: BD.view.zoom >= 12,
                  onClick: () => {
                    BD.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Ss.jsx)("button", {
                  type: "button",
                  "aria-label": cD("skyblockGame:mapZoomOut"),
                  disabled: BD.view.zoom <= 1,
                  onClick: () => {
                    BD.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Ss.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: LD.feedback
              })]
            })
          }), (0, Ss.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [RD.progress && (0, Ss.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Ss.jsx)("span", {
                children: RD.progress
              }), (0, Ss.jsx)(us, {
                percent: RD.percent,
                label: RD.progress
              })]
            }), RD.noLandmarks && (0, Ss.jsx)("span", {
              children: cD("skyblockGame:mapNoLandmarks")
            }), RD.canTravel && (0, Ss.jsx)("span", {
              className: "SkyblockMapHint",
              children: cD("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function KK(DD) {
      let {
        view: zD,
        controller: wD,
        navigation: pD
      } = DD;
      const {
        t: sD
      } = (0, bs.E)(), {
        isTouchScreen: KD
      } = (0, Xs.n)(["isTouchScreen"]);
      return (0, Ss.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": sD("skyblockGame:mapLocal"),
        children: [KD && (0, Ss.jsx)(es.f, {
          className: "SkyblockMinimapOpen",
          onClick: wD.showLocal,
          children: sD("skyblockGame:map")
        }), (0, Ss.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: zD.colour
          },
          children: [(0, Ss.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: pD.display.mountTerrain,
            style: {
              width: zD.width,
              height: zD.height
            },
            children: [(0, Ss.jsx)(ks, {
              imageKey: zD.imageKey,
              fallbackImageKey: zD.fallbackImageKey,
              geometryKey: zD.geometryKey,
              alt: zD.label
            }), (0, Ss.jsx)(vs, {
              mount: pD.display.mountMinimapSearchArea
            }), zD.markers.map((DD => (0, Ss.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${DD.position[0]}%`,
                top: `${DD.position[1]}%`,
                color: DD.colour
              },
              title: DD.name,
              children: (0, Ss.jsx)(ls, {
                icon: DD.icon
              })
            }, DD.id)))]
          }), (0, Ss.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: sD("skyblockGame:mapYouAreHere"),
            children: (0, Ss.jsx)(ls, {
              icon: "player"
            })
          })]
        }), (0, Ss.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: zD.caption
        })]
      })
    }

    function rK(DD) {
      let {
        controller: zD
      } = DD;
      return (0, Ss.jsxs)("div", {
        className: "SkyblockCompass",
        ref: zD.display.mountCompass,
        children: [(0, Ss.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Ss.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Ss.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function LK(DD) {
      let {
        controller: zD,
        surface: wD
      } = DD;
      const {
        t: pD
      } = (0, bs.E)(), sD = (0, ds.k)(Kw, zD.getSnapshot()), KD = as();
      return sD.enabled ? (0, Ss.jsxs)(Ss.Fragment, {
        children: ["hud" === wD && (0, Ss.jsx)(Vs.g, {
          placement: "statBars",
          children: sD.hud && (0, Ss.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": sD.hud.colour
            },
            children: [(0, Ss.jsx)(us, {
              percent: sD.hud.skill.percent,
              label: sD.hud.skill.xp,
              levelUpToken: sD.hud.levelUpToken,
              colour: sD.hud.colour
            }), (0, Ss.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Ss.jsxs)("span", {
                children: [sD.hud.skill.label, " \xb7 ", sD.hud.skill.level]
              }), (0, Ss.jsx)("span", {
                children: sD.hud.gain
              })]
            })]
          })
        }), "hud" === wD && (0, Ss.jsx)(Vs.g, {
          children: sD.hud && (0, Ss.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Ss.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Ss.jsx)("strong", {
                children: sD.hud.skill.label
              }), (0, Ss.jsx)("span", {
                children: sD.hud.gain
              })]
            }), (0, Ss.jsx)(us, {
              percent: sD.hud.skill.percent,
              label: sD.hud.skill.xp,
              levelUpToken: sD.hud.levelUpToken,
              colour: sD.hud.colour
            }), (0, Ss.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Ss.jsx)("span", {
                children: sD.hud.skill.level
              }), (0, Ss.jsx)("span", {
                children: sD.hud.skill.xp
              })]
            })]
          })
        }), "menu" === wD && (0, Ss.jsx)(ms.c, {
          show: sD.open,
          close: zD.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Ss.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: KD,
            onKeyDown: os,
            children: [(0, Ss.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Ss.jsxs)("div", {
                children: [(0, Ss.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: pD("skyblockGame:skills")
                }), (0, Ss.jsx)("p", {
                  children: pD("skyblockGame:skillsIntro")
                })]
              }), (0, Ss.jsx)(es.k, {
                padIgnore: !0,
                onClick: zD.dismiss
              })]
            }), (0, Ss.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Ss.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: sD.skills.map((DD => (0, Ss.jsxs)(es.f, {
                  className: Qs()("SkyblockSkillCard", {
                    Selected: DD.selected
                  }),
                  ariaPressed: DD.selected,
                  onClick: () => {
                    zD.select(DD.id)
                  },
                  children: [(0, Ss.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Ss.jsx)(Cs.d, {
                      itemName: DD.icon,
                      amount: 0
                    })
                  }), (0, Ss.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Ss.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Ss.jsx)("strong", {
                        children: DD.label
                      }), (0, Ss.jsx)("span", {
                        children: DD.level
                      })]
                    }), (0, Ss.jsx)(us, {
                      percent: DD.percent,
                      label: `${DD.label}: ${DD.xp}`
                    }), (0, Ss.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: DD.xp
                    })]
                  })]
                }, DD.id)))
              }), sD.detail && (0, Ss.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Ss.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Ss.jsx)(Cs.d, {
                    itemName: sD.detail.icon,
                    amount: 0
                  })
                }), (0, Ss.jsx)("h3", {
                  children: sD.detail.label
                }), (0, Ss.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: sD.detail.level
                }), (0, Ss.jsx)("p", {
                  children: sD.detail.description
                }), (0, Ss.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Ss.jsx)("strong", {
                    children: pD("skyblockGame:currentBenefit")
                  }), (0, Ss.jsx)("span", {
                    children: sD.detail.benefit
                  })]
                }), (0, Ss.jsx)(us, {
                  percent: sD.detail.percent,
                  label: sD.detail.xp
                }), (0, Ss.jsx)("p", {
                  children: sD.detail.xp
                }), (0, Ss.jsx)("h4", {
                  children: pD("skyblockGame:earnXp")
                }), (0, Ss.jsx)("ul", {
                  children: sD.detail.sources.map((DD => (0, Ss.jsx)("li", {
                    children: DD
                  }, DD)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var cK = wD(1366),
      gK = wD(4852),
      RK = wD(338);

    function AK(DD) {
      let {
        item: zD
      } = DD;
      return (0, Ss.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Ss.jsx)(Cs.d, {
          itemName: zD,
          amount: 0
        })
      })
    }

    function UK(DD) {
      let {
        name: zD,
        percent: wD,
        progress: pD
      } = DD;
      return (0, Ss.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Ss.jsx)(us, {
          percent: wD,
          label: `${(0,RK.ib)(zD)}: ${pD}`
        }), (0, Ss.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: pD
        })]
      })
    }

    function fK(DD) {
      let {
        subquests: zD,
        showDescriptions: wD = !1
      } = DD;
      return (0, Ss.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: zD.map((DD => {
          const zD = wD && "completed" === DD.status,
            pD = (0, Ss.jsxs)("li", {
              className: Qs()("SkyblockQuestStep", DD.status, {
                JustFinished: DD.justFinished,
                JustUnlocked: DD.justUnlocked
              }),
              tabIndex: zD ? 0 : void 0,
              children: [null !== DD.iconItem && (0, Ss.jsx)(AK, {
                item: DD.iconItem
              }), null === DD.iconItem && (0, Ss.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === DD.status ? "\u2713" : "skipped" === DD.status ? "\u2212" : "\u25cb"
              }), (0, Ss.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Ss.jsx)("strong", {
                  children: (0, Ss.jsx)(gK.d, {
                    text: DD.name
                  })
                }), wD && !zD && (0, Ss.jsx)("span", {
                  children: (0, Ss.jsx)(gK.d, {
                    text: DD.description
                  })
                }), null !== DD.barPercent && (0, Ss.jsx)(UK, {
                  name: DD.name,
                  percent: DD.barPercent,
                  progress: DD.progress
                }), null === DD.barPercent && !zD && (0, Ss.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: DD.statusLabel
                })]
              })]
            }, DD.id);
          return zD ? (0, Ss.jsx)(cK.f, {
            delayShow: 200,
            tooltipInner: (0, Ss.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Ss.jsx)("span", {
                children: (0, Ss.jsx)(gK.d, {
                  text: DD.description
                })
              }), (0, Ss.jsx)("strong", {
                children: DD.statusLabel
              })]
            }),
            children: pD
          }, DD.id) : pD
        }))
      })
    }

    function IK(DD) {
      let {
        quest: zD,
        select: wD
      } = DD;
      const {
        t: pD
      } = (0, bs.E)(), sD = zD.focusStep;
      return (0, Ss.jsxs)(es.f, {
        className: Qs()("SkyblockQuestCard", {
          Selected: zD.selected,
          Tracked: zD.tracked
        }),
        onClick: () => {
          wD(zD.id)
        },
        children: [(0, Ss.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Ss.jsx)("strong", {
            children: (0, Ss.jsx)(gK.d, {
              text: zD.name
            })
          }), zD.tracked && (0, Ss.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: pD("skyblockGame:currentQuest")
          })]
        }), sD && (0, Ss.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== sD.iconItem && (0, Ss.jsx)(AK, {
            item: sD.iconItem
          }), (0, Ss.jsx)(UK, {
            name: sD.name,
            percent: sD.barPercent,
            progress: sD.progress
          })]
        }), (0, Ss.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: zD.progress
        })]
      })
    }

    function BK(DD) {
      let {
        controller: zD,
        surface: wD
      } = DD;
      const pD = (0, ds.k)(Rw, zD.getSnapshot()),
        {
          t: sD
        } = (0, bs.E)(),
        KD = as();
      return pD.enabled ? (0, Ss.jsxs)(Ss.Fragment, {
        children: ["hud" === wD && (0, Ss.jsx)(Ss.Fragment, {
          children: pD.tracked && (0, Ss.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: gw,
            children: (0, Ss.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [pD.trackedStepPulse > 0 && (0, Ss.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, pD.trackedStepPulse), (0, Ss.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: sD("skyblockGame:currentQuest")
              }), (0, Ss.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Ss.jsx)("strong", {
                  children: (0, Ss.jsx)(gK.d, {
                    text: pD.tracked.name
                  })
                }), null !== pD.tracked.clock && (0, Ss.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: pD.tracked.clock
                })]
              }), (0, Ss.jsx)(fK, {
                subquests: pD.tracked.subquests
              })]
            })
          })
        }), "menu" === wD && (0, Ss.jsx)(ms.c, {
          show: pD.open,
          close: zD.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Ss.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: KD,
            onKeyDown: os,
            children: [(0, Ss.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Ss.jsx)("div", {
                children: (0, Ss.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: sD("skyblockGame:quests")
                })
              }), (0, Ss.jsx)(es.k, {
                padIgnore: !0,
                onClick: zD.dismiss
              })]
            }), (0, Ss.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Ss.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Ss.jsx)("h3", {
                  children: sD("skyblockGame:current")
                }), 0 === pD.active.length && (0, Ss.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: sD("skyblockGame:noActiveQuests")
                }), pD.active.map((DD => (0, Ss.jsx)(IK, {
                  quest: DD,
                  select: zD.select
                }, DD.id))), (0, Ss.jsx)("h3", {
                  children: (0, Ss.jsxs)("button", {
                    type: "button",
                    className: Qs()("SkyblockQuestSectionToggle", {
                      Expanded: pD.completedExpanded
                    }),
                    "aria-expanded": pD.completedExpanded,
                    onClick: zD.toggleCompleted,
                    children: [(0, Ss.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), sD("skyblockGame:completed"), (0, Ss.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: pD.completed.length
                    })]
                  })
                }), pD.completedExpanded && 0 === pD.completed.length && (0, Ss.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: sD("skyblockGame:noCompletedQuests")
                }), pD.completedExpanded && pD.completed.map((DD => (0, Ss.jsx)(IK, {
                  quest: DD,
                  select: zD.select
                }, DD.id)))]
              }), pD.detail && (0, Ss.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [pD.detail.completed && (0, Ss.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: sD("skyblockGame:completedQuest")
                }), (0, Ss.jsx)("h3", {
                  children: (0, Ss.jsx)(gK.d, {
                    text: pD.detail.name
                  })
                }), (0, Ss.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Ss.jsx)(gK.d, {
                    text: pD.detail.description
                  })
                }), (0, Ss.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [pD.detail.progress, null !== pD.detail.clock && (0, Ss.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: pD.detail.clock
                  })]
                }), (0, Ss.jsx)(fK, {
                  subquests: pD.detail.subquests,
                  showDescriptions: !0
                }), pD.detail.tracked && (0, Ss.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: pD.detail.trackLabel
                }), !pD.detail.completed && !pD.detail.tracked && (0, Ss.jsx)(es.o, {
                  onClick: zD.trackSelected,
                  disabled: !pD.detail.canTrack,
                  children: pD.detail.trackLabel
                }), pD.detail.canViewDialogue && (0, Ss.jsx)(es.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: zD.viewDialogue,
                  children: sD("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var GK = wD(1057),
      hK = wD(2624);

    function nK(DD, zD, wD, pD, sD) {
      const KD = DD => "linear" === sD ? DD : {
          XK: sD,
          point: DD
        },
        rD = {};
      for (const [LD, cD] of pD)
        for (const [zD, wD] of Object.entries(DD(LD, cD, KD))) rD[zD] ??= {
          timeline: []
        }, rD[zD].timeline.push(wD);
      return {
        nK: zD,
        loop: wD,
        JK: rD
      }
    }
    const MK = .547,
      OK = .022,
      JK = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      EK = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function QK(DD, zD, wD) {
      const {
        drop: pD = 0,
        shift: sD = 0,
        torso: KD = 0,
        nod: rD = 0,
        tilt: LD = 0,
        legs: cD = [0, 0],
        arms: gD = 0,
        spread: RD = 0
      } = zD, AD = MK * Math.cos(KD) - OK * Math.sin(KD), UD = MK * Math.sin(KD) + OK * Math.cos(KD), fD = wD([0, -pD, sD]);
      return {
        LowerBody: {
          timeFraction: DD,
          position: fD,
          rotation: wD([0, 0, 0])
        },
        UpperBody: {
          timeFraction: DD,
          position: fD,
          rotation: wD([KD, 0, LD])
        },
        HeadMesh: {
          timeFraction: DD,
          position: wD([0, AD - MK - pD, UD - OK + sD]),
          rotation: wD([KD + rD, 0, LD])
        },
        LegLeftMesh: {
          timeFraction: DD,
          rotation: wD([cD[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: DD,
          rotation: wD([cD[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: DD,
          rotation: wD([gD, 0, RD])
        },
        ArmRightMesh: {
          timeFraction: DD,
          rotation: wD([gD, 0, -RD])
        }
      }
    }

    function XK(DD, zD, wD) {
      return nK(QK, DD, zD, wD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function VK(DD) {
      return "number" === typeof DD ? [DD, DD] : DD
    }

    function PK(DD, zD, wD) {
      const {
        rise: pD = 0,
        shift: sD = 0,
        torso: KD = 0,
        twist: rD = 0,
        tilt: LD = 0,
        nod: cD = 0,
        cock: gD = 0,
        arms: RD = 0,
        spread: AD = 0
      } = zD, [UD, fD] = VK(RD), [ID, BD] = VK(AD);
      return {
        TorsoNode: {
          timeFraction: DD,
          position: wD([0, pD, sD]),
          rotation: wD([KD, rD, LD])
        },
        HeadMesh: {
          timeFraction: DD,
          rotation: wD([cD, 0, gD])
        },
        ArmLeftMesh: {
          timeFraction: DD,
          rotation: wD([UD, 0, ID])
        },
        ArmRightMesh: {
          timeFraction: DD,
          rotation: wD([fD, 0, -BD])
        }
      }
    }
    const CK = [1.0625, -1, 0];

    function xK(DD) {
      return "number" === typeof DD ? [DD, DD] : DD
    }

    function TK(DD, zD, wD) {
      const {
        drop: pD = 0,
        shift: sD = 0,
        torso: KD = 0,
        tilt: rD = 0,
        nod: LD = 0,
        cock: cD = 0,
        legs: gD = [0, 0],
        arms: RD = 0,
        spread: AD = 0
      } = zD, [UD, fD] = xK(RD), [ID, BD] = xK(AD), GD = -KD, hD = -rD, [nD, MD, OD] = function(DD, zD) {
        const [wD, pD, sD] = [-CK[0], CK[1], -CK[2]], KD = wD * Math.cos(zD) - pD * Math.sin(zD), rD = wD * Math.sin(zD) + pD * Math.cos(zD);
        return [KD - wD, -(rD * Math.cos(DD) - sD * Math.sin(DD) - pD), rD * Math.sin(DD) + sD * Math.cos(DD) - sD]
      }(GD, hD), JD = wD([0, -pD, sD]);
      return {
        TorsoNode: {
          timeFraction: DD,
          position: wD([nD, MD - pD, OD + sD]),
          rotation: wD([GD, 0, hD])
        },
        HeadMesh: {
          timeFraction: DD,
          rotation: wD([-LD, 0, -cD])
        },
        ArmLeftMesh: {
          timeFraction: DD,
          rotation: wD([-UD, 0, -ID])
        },
        ArmRightMesh: {
          timeFraction: DD,
          rotation: wD([-fD, 0, BD])
        },
        LegLeftMesh: {
          timeFraction: DD,
          position: JD,
          rotation: wD([-gD[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: DD,
          position: JD,
          rotation: wD([-gD[1], 0, 0])
        }
      }
    }
    var bK = wD(37164),
      jK = wD(38448),
      dK = wD(38621);

    function SK(DD, zD, wD) {
      var pD, sD;
      const KD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return DD + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - DD) * wD
        },
        [rD, LD] = null !== (pD = DD.legs) && void 0 !== pD ? pD : [0, 0],
        [cD, gD] = null !== (sD = zD.legs) && void 0 !== sD ? sD : [0, 0];
      return {
        drop: KD(DD.drop, zD.drop),
        shift: KD(DD.shift, zD.shift),
        torso: KD(DD.torso, zD.torso),
        nod: KD(DD.nod, zD.nod),
        tilt: KD(DD.tilt, zD.tilt),
        legs: [KD(rD, cD), KD(LD, gD)],
        arms: KD(DD.arms, zD.arms),
        spread: KD(DD.spread, zD.spread)
      }
    }
    const iK = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      lK = XK(4400, !0, [
        [0, iK],
        [.16, {
          ...iK,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, iK],
        [.44, {
          ...iK,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, SK(iK, JK, .7)],
        [.66, SK(iK, JK, .78)],
        [.74, SK(iK, EK, .65)],
        [.86, {
          ...iK,
          drop: .14
        }],
        [1, iK]
      ], "catmull-rom-spline"),
      WK = {
        ...iK,
        drop: .14,
        torso: .3,
        spread: .4
      },
      NK = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      ZK = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      yK = {
        caveGolem: lK,
        magmaGolem: XK(3600, !0, [
          [0, WK],
          [.12, {
            ...WK,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...WK,
            tilt: -.08
          }],
          [.4, {
            ...WK,
            tilt: .06,
            drop: .11
          }],
          [.52, SK(WK, JK, .9)],
          [.62, SK(WK, EK, .8)],
          [.7, SK(WK, EK, .45)],
          [.78, SK(WK, EK, .85)],
          [.9, {
            ...WK,
            drop: .17
          }],
          [1, WK]
        ], "catmull-rom-spline"),
        frostWraith: function(DD, zD, wD) {
          return nK(PK, DD, zD, wD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, NK],
          [.14, {
            ...NK,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...NK,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...NK,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...NK,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...NK,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...NK,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...NK,
            rise: .16,
            tilt: -.04
          }],
          [1, NK]
        ], "catmull-rom-spline"),
        tikiTerror: function(DD, zD, wD) {
          return nK(TK, DD, zD, wD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, ZK],
          [.16, {
            ...ZK,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, ZK],
          [.44, {
            ...ZK,
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
            ...ZK,
            drop: .1
          }],
          [1, ZK]
        ], "catmull-rom-spline")
      },
      kK = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      mK = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      eK = Object.fromEntries(Object.entries(yK).map((DD => {
        let [zD, wD] = DD;
        return [zD, (0, dK.d)((0, bK.f)(wD), zD)]
      })));

    function oK(DD) {
      const zD = function(DD) {
        var zD;
        const wD = (0, jK.b)(DD).poseRig;
        return null !== (zD = mK[DD]) && void 0 !== zD ? zD : void 0 === wD ? null : kK[wD]
      }(DD);
      return null === zD ? null : eK[zD]
    }

    function aK(DD) {
      return {
        "--difficulty-colour": DD
      }
    }
    const uK = (0, VD.lazy)((() => (0, hK.b)(wD.e(200).then((() => wD(41416))), (DD => DD.MobPreview))));

    function vK(DD) {
      var zD, wD, pD;
      let {
        picker: sD,
        controller: KD
      } = DD;
      const {
        t: rD
      } = (0, bs.E)(), LD = as(), {
        page: cD
      } = sD;
      return (0, Ss.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: LD,
        onKeyDown: DD => {
          "ArrowLeft" === DD.key ? (DD.preventDefault(), DD.stopPropagation(), KD.previous()) : "ArrowRight" === DD.key ? (DD.preventDefault(), DD.stopPropagation(), KD.next()) : os(DD)
        },
        style: aK(cD.colour),
        children: [(0, Ss.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Ss.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: sD.dungeonName
          }), (0, Ss.jsx)(es.k, {
            padIgnore: !0,
            onClick: KD.dismiss
          })]
        }), (0, Ss.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Ss.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Ss.jsx)(es.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !sD.canPrevious,
              onClick: KD.previous,
              children: (0, Ss.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Ss.jsx)(GK.e, {
                  name: "angle-up"
                })
              })
            }), (0, Ss.jsxs)("div", {
              className: Qs()("SkyblockBossPickerBoss", {
                Locked: !cD.unlocked
              }),
              children: [null !== cD.bossMobType && (0, Ss.jsx)(VD.Suspense, {
                fallback: (0, Ss.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Ss.jsx)(uK, {
                  className: "SkyblockBossPickerModel",
                  mobType: cD.bossMobType,
                  variation: cD.bossMobVariation,
                  animation: null !== (zD = oK(cD.bossMobType)) && void 0 !== zD ? zD : void 0
                })
              }), null === cD.bossMobType && (0, Ss.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Ss.jsx)(es.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !sD.canNext,
              onClick: KD.next,
              children: (0, Ss.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Ss.jsx)(GK.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Ss.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [cD.beaten && (0, Ss.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), cD.label]
            }), (0, Ss.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (wD = cD.bossName) && void 0 !== wD ? wD : "???"
            }), (0, Ss.jsxs)("span", {
              className: Qs()("SkyblockBossPickerRecord", {
                Locked: null !== cD.lockedHint
              }),
              children: [null !== cD.lockedHintHighlight && (0, Ss.jsxs)(Ss.Fragment, {
                children: [cD.lockedHintHighlight.before, (0, Ss.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: aK(cD.lockedHintHighlight.colour),
                  children: [null !== cD.lockedHintHighlight.icon && (0, Ss.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Ss.jsx)(Cs.d, {
                      itemName: cD.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), cD.lockedHintHighlight.name]
                }), cD.lockedHintHighlight.after]
              }), null === cD.lockedHintHighlight && (null !== (pD = cD.lockedHint) && void 0 !== pD ? pD : cD.summary)]
            })]
          }), (0, Ss.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: sD.pages.map((DD => (0, Ss.jsx)("span", {
              className: Qs()("SkyblockBossPickerDot", {
                Current: DD.current,
                Locked: !DD.unlocked
              }),
              style: aK(DD.colour)
            }, DD.difficulty)))
          }), (0, Ss.jsx)(es.v, {
            className: "SkyblockBossPickerFight",
            disabled: !cD.unlocked,
            onClick: KD.enter,
            children: rD("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function tK(DD) {
      let {
        dungeon: zD,
        select: wD
      } = DD;
      return (0, Ss.jsxs)(es.f, {
        className: Qs()("SkyblockDungeonCard", {
          Selected: zD.selected
        }),
        onClick: () => {
          wD(zD.id)
        },
        children: [(0, Ss.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Ss.jsx)("strong", {
            children: zD.name
          }), (0, Ss.jsx)("span", {
            children: zD.beatenSummary
          })]
        }), (0, Ss.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: zD.difficulties.map((DD => (0, Ss.jsxs)("span", {
            className: Qs()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: DD.beaten
            }),
            style: aK(DD.colour),
            title: DD.summary,
            children: [DD.beaten && (0, Ss.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), DD.label]
          }, DD.difficulty)))
        })]
      })
    }

    function FK(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(Iw, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)(),
        sD = as();
      return wD.enabled ? (0, Ss.jsxs)(ms.c, {
        show: wD.open,
        close: zD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [wD.picker && (0, Ss.jsx)(vK, {
          picker: wD.picker,
          controller: zD
        }), !wD.picker && (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: sD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: pD("skyblockGame:dungeons")
              }), (0, Ss.jsx)("p", {
                children: pD("skyblockGame:dungeonsIntro")
              })]
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              onClick: zD.dismiss
            })]
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Ss.jsx)("div", {
              className: "SkyblockDungeonList",
              children: wD.dungeons.map((DD => (0, Ss.jsx)(tK, {
                dungeon: DD,
                select: zD.select
              }, DD.id)))
            }), wD.detail && (0, Ss.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Ss.jsx)("h3", {
                children: wD.detail.name
              }), (0, Ss.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: wD.detail.difficulties.map((DD => (0, Ss.jsxs)("li", {
                  className: Qs()("SkyblockDungeonRecord", {
                    Beaten: DD.beaten
                  }),
                  children: [(0, Ss.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: aK(DD.colour),
                    children: [DD.beaten && (0, Ss.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), DD.label]
                  }), (0, Ss.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: DD.summary
                  })]
                }, DD.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function YK(DD) {
      let {
        collection: zD,
        select: wD
      } = DD;
      return (0, Ss.jsxs)(es.f, {
        className: Qs()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: zD.selected,
          Locked: zD.locked
        }),
        ariaPressed: zD.selected,
        onClick: () => {
          wD(zD.id)
        },
        children: [(0, Ss.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Ss.jsx)(Cs.d, {
            itemName: zD.icon,
            amount: 0
          })
        }), (0, Ss.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Ss.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Ss.jsx)("strong", {
              children: zD.name
            }), (0, Ss.jsx)("span", {
              children: zD.tier
            })]
          }), (0, Ss.jsx)(us, {
            percent: zD.percent,
            label: `${zD.name}: ${zD.progress}`
          }), (0, Ss.jsx)("span", {
            className: "SkyblockSkillXp",
            children: zD.progress
          })]
        })]
      })
    }

    function HK(DD) {
      let {
        collection: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)();
      return (0, Ss.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Ss.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Ss.jsx)(Cs.d, {
            itemName: zD.icon,
            amount: 0
          })
        }), (0, Ss.jsx)("h3", {
          children: zD.name
        }), (0, Ss.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: zD.tier
        }), (0, Ss.jsx)("p", {
          children: zD.locked ? wD("skyblockGame:collectionLocked") : zD.count
        }), null !== zD.nextReward && (0, Ss.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Ss.jsx)("strong", {
            children: wD("skyblockGame:collectionNextReward")
          }), (0, Ss.jsx)("span", {
            children: zD.nextReward
          })]
        }), (0, Ss.jsx)(us, {
          percent: zD.percent,
          label: zD.progress
        }), (0, Ss.jsx)("p", {
          children: zD.progress
        })]
      })
    }

    function qK(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(lw, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)(),
        sD = as();
      return wD.enabled ? (0, Ss.jsx)(ms.c, {
        show: wD.open,
        close: zD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: sD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: pD("skyblockGame:collections")
              }), (0, Ss.jsxs)("p", {
                children: [pD("skyblockGame:collectionsIntro"), " ", wD.tiersUnlocked]
              })]
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              onClick: zD.dismiss
            })]
          }), (0, Ss.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: wD.categories.map((DD => (0, Ss.jsxs)(es.f, {
              className: Qs()("SkyblockCollectionCategory", {
                Selected: DD.selected
              }),
              ariaPressed: DD.selected,
              padTabSelected: DD.selected,
              onClick: () => {
                zD.selectCategory(DD.id)
              },
              children: [(0, Ss.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Ss.jsx)(Cs.d, {
                  itemName: DD.icon,
                  amount: 0
                })
              }), (0, Ss.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Ss.jsx)("strong", {
                  children: DD.label
                }), (0, Ss.jsx)("span", {
                  children: DD.tiers
                })]
              })]
            }, DD.id)))
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Ss.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: wD.collections.map((DD => (0, Ss.jsx)(YK, {
                collection: DD,
                select: zD.select
              }, DD.id)))
            }), wD.detail && (0, Ss.jsx)(HK, {
              collection: wD.detail
            })]
          })]
        })
      }) : null
    }
    const Dr = ["completed", "active", "available", "locked"],
      zr = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function wr(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(tw, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)(),
        sD = as();
      return wD.enabled ? (0, Ss.jsx)(ms.c, {
        show: wD.open,
        close: zD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: sD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: pD("skyblockDevQuests:title")
              }), (0, Ss.jsx)("p", {
                children: pD("skyblockDevQuests:intro")
              })]
            }), (0, Ss.jsx)(es.k, {
              onClick: zD.dismiss
            })]
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Dr.map((DD => (0, Ss.jsx)("span", {
              className: Qs()("SkyblockQuestGraphLegendState", DD),
              children: pD(`skyblockDevQuests:state_${DD}`)
            }, DD))), zr.map((DD => (0, Ss.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Ss.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Ss.jsx)("line", {
                  className: Qs()("SkyblockQuestGraphEdge", DD),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), pD(`skyblockDevQuests:edge_${DD}`)]
            }, DD)))]
          }), (0, Ss.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Ss.jsxs)("div", {
              className: Qs()("SkyblockQuestGraphCanvas", {
                Planning: wD.planning
              }),
              style: {
                width: wD.width,
                height: wD.height
              },
              children: [(0, Ss.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: wD.width,
                height: wD.height,
                "aria-hidden": "true",
                children: [(0, Ss.jsx)("defs", {
                  children: (0, Ss.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Ss.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), wD.edges.map((DD => (0, Ss.jsx)("path", {
                  className: Qs()("SkyblockQuestGraphEdge", DD.kind, {
                    InPlan: DD.inPlan
                  }),
                  d: DD.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, DD.key)))]
              }), wD.nodes.map((DD => (0, Ss.jsxs)("button", {
                type: "button",
                className: Qs()("SkyblockQuestGraphNode", DD.state, {
                  InPlan: DD.inPlan,
                  Hovered: DD.hovered
                }),
                style: {
                  left: DD.left,
                  top: DD.top,
                  width: 190,
                  height: 52
                },
                title: DD.id,
                onMouseEnter: () => {
                  zD.hover(DD.id)
                },
                onMouseLeave: () => {
                  zD.hover(null)
                },
                onFocus: () => {
                  zD.hover(DD.id)
                },
                onBlur: () => {
                  zD.hover(null)
                },
                onClick: () => {
                  zD.jump(DD.id)
                },
                children: [(0, Ss.jsx)("strong", {
                  children: DD.name
                }), (0, Ss.jsx)("span", {
                  children: DD.detail
                })]
              }, DD.id)))]
            })
          })]
        })
      }) : null
    }
    const pr = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      sr = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${cp}ms`,
        "--forge-duration": "2150ms"
      },
      Kr = Array.from({
        length: 18
      }, ((DD, zD) => ({
        "--ember-left": `${(4+92*(.618034*zD%1)).toFixed(1)}%`,
        "--ember-size": 3 + zD % 3 * 2 + "px",
        "--ember-drift": 14 * (zD % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*zD%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*zD%8).toFixed(2)}s`
      })));

    function rr(DD) {
      if (DD.style.removeProperty("--part-size"), null === DD.parentElement || "wrap" === getComputedStyle(DD.parentElement).flexWrap) return;
      const zD = [...DD.children],
        wD = getComputedStyle(DD),
        pD = parseFloat(wD.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        sD = (DD.clientHeight - parseFloat(wD.rowGap) * (zD.length - 1)) / zD.length,
        KD = zD.map((DD => {
          const zD = getComputedStyle(DD),
            wD = DD.querySelector("h3"),
            KD = DD.querySelector(".SkyblockForgeParts");
          if (null === wD || null === KD) return pD;
          const rD = sD - parseFloat(zD.paddingTop) - parseFloat(zD.paddingBottom) - wD.offsetHeight - parseFloat(getComputedStyle(wD).marginBottom),
            LD = parseFloat(getComputedStyle(KD).columnGap),
            cD = KD.children.length;
          let gD = 0;
          for (let pD = 1; pD <= cD; pD++) {
            const DD = Math.ceil(cD / pD);
            gD = Math.max(gD, Math.min((KD.clientWidth - LD * (pD - 1)) / pD, (rD - LD * (DD - 1)) / DD))
          }
          return gD
        }));
      DD.style.setProperty("--part-size", `${Math.floor(Math.max(pD,Math.min(...KD)))}px`)
    }

    function Lr(DD) {
      var zD, wD, pD, KD, rD;
      let {
        controller: LD
      } = DD;
      const cD = (0, ds.k)(Bp, LD.getSnapshot()),
        {
          t: gD
        } = (0, bs.E)(),
        RD = as(),
        AD = function() {
          const DD = (0, VD.useRef)(null),
            zD = (0, VD.useRef)(null);
          return (0, VD.useLayoutEffect)((() => {
            null !== DD.current && rr(DD.current)
          })), (0, VD.useCallback)((wD => {
            var pD;
            null === (pD = zD.current) || void 0 === pD || pD.disconnect(), zD.current = null, DD.current = wD, null !== wD && (zD.current = new ResizeObserver((() => {
              rr(wD)
            })), zD.current.observe(wD))
          }), [])
        }(),
        UD = function(DD) {
          const zD = (0, VD.useRef)(null);
          return (0, VD.useLayoutEffect)((() => {
            const DD = zD.current;
            if (null !== DD) {
              DD.style.removeProperty("font-size");
              for (let zD = 1.7; zD > 1.1 && DD.scrollWidth > DD.clientWidth; zD -= .1) DD.style.fontSize = zD - .1 + "rem"
            }
          }), [DD]), (0, VD.useCallback)((DD => {
            zD.current = DD
          }), [])
        }(null === (zD = cD.preview) || void 0 === zD ? void 0 : zD.name),
        fD = (0, VD.useRef)(null),
        ID = (0, VD.useRef)({}),
        BD = cD.forging,
        GD = null !== (wD = null === BD || void 0 === BD ? void 0 : BD.preview.tier) && void 0 !== wD ? wD : 0,
        hD = null !== (pD = null === BD || void 0 === BD ? void 0 : BD.preview.named) && void 0 !== pD && pD,
        nD = (0, VD.useMemo)((() => {
          return null === BD ? null : {
            flames: (DD = GD, zD = hD, Array.from({
              length: 26 + 6 * DD + (zD ? 20 : 0)
            }, ((DD, zD) => {
              const wD = zD < 6,
                pD = Math.random() * Math.PI * 2,
                sD = wD ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                KD = Math.cos(pD) * sD,
                rD = Math.sin(pD) * sD - 2 - 3 * Math.random(),
                LD = Math.random(),
                [cD, gD, RD] = wD ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : LD < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : LD < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [LD < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": cD,
                "--x0": `${(.15*KD).toFixed(2)}rem`,
                "--y0": `${(.15*rD).toFixed(2)}rem`,
                "--x": `${KD.toFixed(2)}rem`,
                "--y": `${rD.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${gD.toFixed(2)}rem`,
                "--duration": `${Math.round(RD)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: Ap(GD, hD)
          };
          var DD, zD
        }), [null === BD || void 0 === BD ? void 0 : BD.id]);
      if (!cD.enabled) return null;
      const MD = cD.preview,
        OD = cD.arriving,
        JD = null !== OD && !OD.sameSword,
        ED = null !== MD && (0, Ss.jsx)(Cs.d, {
          itemName: MD.baseSword,
          amount: 0,
          enchantmentTier: MD.enchantmentTier
        });
      return (0, Ss.jsx)(ms.c, {
        show: cD.open,
        close: LD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: RD,
          onKeyDown: os,
          children: [(0, Ss.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Kr.map(((DD, zD) => (0, Ss.jsx)("span", {
              style: DD
            }, zD)))
          }), (0, Ss.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: gD("skyblockGame:forgeTitle")
              }), (0, Ss.jsx)("p", {
                children: gD("skyblockGame:forgeIntro")
              })]
            }), (0, Ss.jsx)(es.k, {
              onClick: LD.dismiss
            })]
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Ss.jsx)("div", {
              ref: AD,
              className: Qs()("SkyblockForgeSlots", {
                Locked: null !== BD
              }),
              children: cD.slots.map((DD => (0, Ss.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Ss.jsx)("h3", {
                  children: DD.label
                }), (0, Ss.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: DD.parts.map((zD => (0, Ss.jsx)("button", {
                    type: "button",
                    className: Qs()("SkyblockForgePart", {
                      Selected: zD.selected,
                      Missing: zD.placeholder
                    }),
                    disabled: zD.placeholder,
                    title: zD.placeholder ? gD("skyblockGame:forgePickParts") : zD.itemName,
                    "aria-pressed": zD.selected,
                    onClick: () => {
                      LD.select(DD.kind, zD.material)
                    },
                    children: (0, Ss.jsx)(Cs.d, {
                      itemName: zD.itemName,
                      amount: zD.owned
                    })
                  }, zD.material)))
                })]
              }, DD.kind)))
            }), (0, Ss.jsxs)("div", {
              className: Qs()("SkyblockForgeAnvil", {
                Named: null === MD || void 0 === MD ? void 0 : MD.named
              }),
              style: {
                "--tier": null === MD ? "transparent" : sD.pb[MD.enchantmentTier]
              },
              children: [(0, Ss.jsxs)("div", {
                className: Qs()("SkyblockForgeAltar", {
                  Forging: null !== BD
                }),
                style: null === BD ? void 0 : sr,
                children: [(0, Ss.jsxs)("div", {
                  className: Qs()("SkyblockForgeMount", {
                    Arrive: null !== OD
                  }),
                  children: [null === MD && (0, Ss.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Ss.jsx)(Cs.d, {
                      itemName: cD.unformedSword,
                      amount: 0
                    })
                  }), null !== MD && (0, Ss.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== MD && null === BD && (0, Ss.jsx)("div", {
                    ref: fD,
                    className: "SkyblockForgeFloat",
                    children: (0, Ss.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: ED
                    })
                  }), null !== MD && (0, Ss.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: Rp.map(((DD, zD) => (0, Ss.jsx)("span", {
                      className: Qs()({
                        Rune: "" !== DD.rune
                      }),
                      style: DD.style,
                      children: DD.rune
                    }, zD)))
                  }), null !== BD && null !== nD && (0, Ss.jsxs)(Ss.Fragment, {
                    children: [(0, Ss.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Ss.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: nD.flames.map(((DD, zD) => (0, Ss.jsx)("span", {
                        style: DD
                      }, zD)))
                    }), (0, Ss.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: ID.current,
                      children: (0, Ss.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: ED
                      })
                    }), (0, Ss.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Ss.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (GD >= 4 || hD) && (0, Ss.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Ss.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: nD.sparks.map(((DD, zD) => (0, Ss.jsx)("span", {
                        style: DD
                      }, zD)))
                    }), (0, Ss.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Ss.jsx)("p", {
                  className: Qs()("SkyblockForgeStatus", null === (KD = cD.status) || void 0 === KD ? void 0 : KD.tone),
                  children: null === (rD = cD.status) || void 0 === rD ? void 0 : rD.text
                })]
              }), null === MD && (0, Ss.jsx)("p", {
                className: Qs()("SkyblockForgeName Waiting", {
                  ArriveText: JD
                }),
                children: gD(cD.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== MD && (0, Ss.jsx)("h3", {
                ref: UD,
                className: Qs()("SkyblockForgeName", {
                  ArriveText: JD
                }),
                title: MD.name,
                children: MD.name
              }), (null === MD || void 0 === MD ? void 0 : MD.named) && (0, Ss.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: gD("skyblockGame:forgeSecret")
              }), (0, Ss.jsxs)(es.v, {
                className: "SkyblockForgeButton",
                disabled: !cD.canForge,
                title: null === MD ? void 0 : gD("skyblockGame:forgeCoalOwned", {
                  owned: String(cD.coalOwned)
                }),
                onClick: () => {
                  ID.current = function(DD) {
                    const zD = null === DD ? "none" : getComputedStyle(DD).transform,
                      wD = new DOMMatrixReadOnly("none" === zD ? void 0 : zD);
                    return {
                      "--settle-y": `${wD.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(wD.b,wD.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(fD.current), Ip(), LD.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [gD("skyblockGame:forgeButton"), null !== MD && (0, Ss.jsxs)("span", {
                  className: Qs()("SkyblockForgeCost", {
                    Short: MD.coalShort
                  }),
                  children: [(0, Ss.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Ss.jsx)(Cs.d, {
                      itemName: Dp.b,
                      amount: 0
                    })
                  }), MD.coalCost]
                })]
              })]
            }), (0, Ss.jsxs)("div", {
              className: Qs()("SkyblockForgeDetails", {
                Named: null === MD || void 0 === MD ? void 0 : MD.named
              }),
              children: [(0, Ss.jsx)("p", {
                className: Qs()("SkyblockForgeLore", {
                  ArriveText: JD
                }),
                title: null === MD || void 0 === MD ? void 0 : MD.lore,
                children: null === MD || void 0 === MD ? void 0 : MD.lore
              }), (0, Ss.jsxs)("dl", {
                className: Qs()("SkyblockForgeStats", {
                  ArriveText: JD
                }),
                children: [null === MD && pr.map((DD => (0, Ss.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Ss.jsx)("dt", {
                    children: gD(DD)
                  }), (0, Ss.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, DD))), null === MD || void 0 === MD ? void 0 : MD.stats.map((DD => (0, Ss.jsxs)("div", {
                  className: Qs()("SkyblockForgeStat", {
                    Better: DD.better
                  }),
                  children: [(0, Ss.jsx)("dt", {
                    children: DD.label
                  }), (0, Ss.jsx)("dd", {
                    children: DD.value
                  })]
                }, DD.label)))]
              }), (0, Ss.jsx)("ul", {
                className: Qs()("SkyblockForgeEffects", {
                  ArriveText: JD
                }),
                children: null === MD || void 0 === MD ? void 0 : MD.effects.map((DD => (0, Ss.jsx)("li", {
                  children: DD
                }, DD)))
              })]
            })]
          })]
        })
      })
    }
    const cr = "Doom Rivet",
      gr = "Doom Crest";

    function Rr(DD) {
      let {
        itemName: zD,
        amount: wD,
        owned: pD
      } = DD;
      return (0, Ss.jsxs)("span", {
        className: Qs()("SkyblockSmugglerPrice", {
          Short: wD > pD
        }),
        children: [(0, Ss.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Ss.jsx)(Cs.d, {
            itemName: zD,
            amount: 0
          })
        }), (0, Ss.jsx)("span", {
          children: wD
        })]
      })
    }

    function Ar(DD) {
      return DD.justBought ? "skyblockGame:smugglerJustBought" : DD.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Ur(DD) {
      let {
        deal: zD,
        view: wD,
        buy: pD
      } = DD;
      const {
        t: sD
      } = (0, bs.E)();
      return (0, Ss.jsxs)("div", {
        className: Qs()("SkyblockSmugglerPocket", {
          Bought: zD.justBought,
          Unaffordable: !zD.affordable,
          SoldOut: zD.soldOut && !zD.justBought
        }),
        children: [(0, Ss.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Ss.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Ss.jsx)(Cs.d, {
            itemName: zD.itemName,
            amount: 0,
            enchantmentTier: zD.enchantmentTier
          }), zD.amount > 1 && (0, Ss.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: sD("skyblockGame:smugglerAmount", {
              amount: zD.amount
            })
          })]
        }), (0, Ss.jsx)("h3", {
          children: zD.displayName
        }), (0, Ss.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Ss.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [zD.rivets > 0 && (0, Ss.jsx)(Rr, {
              itemName: cr,
              amount: zD.rivets,
              owned: wD.rivetsOwned
            }), zD.crests > 0 && (0, Ss.jsx)(Rr, {
              itemName: gr,
              amount: zD.crests,
              owned: wD.crestsOwned
            })]
          }), (0, Ss.jsx)(es.f, {
            className: "SkyblockSmugglerBuy",
            disabled: zD.soldOut || !zD.affordable || wD.pending,
            onClick: () => {
              pD(zD.slot)
            },
            children: sD(Ar(zD))
          })]
        })]
      }, zD.justBought ? wD.boughtCount : 0)
    }

    function fr(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(np, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)(),
        sD = as();
      return wD.enabled ? (0, Ss.jsx)(ms.c, {
        show: wD.open,
        close: zD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: sD,
          onKeyDown: os,
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Ss.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Ss.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: pD("skyblockGame:smugglerTitle")
              }), (0, Ss.jsx)("p", {
                children: pD("skyblockGame:smugglerIntro")
              })]
            }), (0, Ss.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Ss.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Ss.jsx)(Rr, {
                  itemName: cr,
                  amount: wD.rivetsOwned,
                  owned: wD.rivetsOwned
                }), (0, Ss.jsx)(Rr, {
                  itemName: gr,
                  amount: wD.crestsOwned,
                  owned: wD.crestsOwned
                })]
              }), (0, Ss.jsx)(es.k, {
                onClick: zD.dismiss
              })]
            })]
          }), (0, Ss.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: wD.deals.map((DD => (0, Ss.jsx)(Ur, {
              deal: DD,
              view: wD,
              buy: zD.buy
            }, DD.slot)))
          }), (0, Ss.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Ss.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: wD.rotatesText
            }), null !== wD.status && (0, Ss.jsx)("span", {
              className: Qs()("SkyblockSmugglerStatus", wD.status.tone),
              children: wD.status.text
            })]
          })]
        })
      }) : null
    }

    function Ir(DD) {
      let {
        phase: zD,
        className: wD
      } = DD;
      return (0, Ss.jsx)("span", {
        className: Qs()("SkyblockMoon", `Moon-${zD}`, wD),
        "aria-hidden": "true"
      })
    }

    function Br(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(Jp, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)();
      return wD.enabled ? (0, Ss.jsx)(Vs.g, {
        placement: "statBars",
        children: (0, Ss.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Qs()("SkyblockPassageChip", wD.open && "Open"),
          "aria-label": pD("skyblockGame:passageChipLabel", {
            phase: wD.phaseName
          }),
          title: pD("skyblockGame:passageChipLabel", {
            phase: wD.phaseName
          }),
          onMouseDown: DD => {
            DD.preventDefault()
          },
          onClick: zD.toggle,
          children: (0, Ss.jsx)(Ir, {
            phase: wD.phase
          }, wD.phase)
        })
      }) : null
    }

    function Gr(DD) {
      let {
        fish: zD
      } = DD;
      return (0, Ss.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Ss.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Ss.jsx)(Cs.d, {
            itemName: zD.itemName,
            amount: 0
          })
        }), (0, Ss.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: zD.displayName
          }), (0, Ss.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: zD.where
          })]
        })]
      })
    }

    function hr(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(Jp, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)(),
        sD = as();
      return wD.enabled ? (0, Ss.jsx)(ms.c, {
        show: wD.open,
        close: zD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: sD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Ss.jsx)(Ir, {
              phase: wD.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: pD("skyblockGame:passageTitle")
              }), (0, Ss.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: wD.phaseName
              })]
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              onClick: zD.dismiss
            })]
          }), (0, Ss.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: pD("skyblockGame:passageIntro")
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Ss.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Ss.jsx)("h3", {
                children: pD("skyblockGame:passageVisiting")
              }), (0, Ss.jsx)("ul", {
                className: "SkyblockPassageList",
                children: wD.visitors.map((DD => (0, Ss.jsx)(Gr, {
                  fish: DD
                }, DD.itemName)))
              })]
            }), (0, Ss.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== wD.resting && (0, Ss.jsxs)(Ss.Fragment, {
                children: [(0, Ss.jsx)("h3", {
                  children: pD("skyblockGame:passageResting")
                }), (0, Ss.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Ss.jsx)(Gr, {
                    fish: wD.resting
                  })
                })]
              }), (0, Ss.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Ss.jsx)(Ir, {
                  phase: wD.nextPhase
                }), (0, Ss.jsx)("span", {
                  children: wD.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function nr() {
      return (0, Ss.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((DD => (0, Ss.jsx)("i", {
          style: {
            "--sparkle-index": DD
          }
        }, DD)))
      })
    }

    function Mr(DD) {
      var zD;
      let {
        charm: wD,
        view: pD,
        controller: sD
      } = DD;
      const {
        t: KD
      } = (0, bs.E)(), rD = pD.shop, LD = (null === (zD = pD.sparkle) || void 0 === zD ? void 0 : zD.id) === wD.id;
      return (0, Ss.jsxs)("li", {
        className: Qs()("SkyblockLampLightCharm", wD.owned && "Owned", wD.socketed && "Socketed"),
        children: [LD && (0, Ss.jsx)(nr, {}, pD.sparkle.count), (0, Ss.jsx)("h4", {
          children: wD.name
        }), (0, Ss.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: wD.effect
        }), (0, Ss.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: wD.lines.map((DD => (0, Ss.jsxs)("li", {
            className: Qs()("SkyblockLampLightOddsLine", "better" === DD.tone ? "Better" : "worse" === DD.tone ? "Worse" : "Same"),
            children: [(0, Ss.jsx)("span", {
              className: "Before",
              children: DD.before
            }), (0, Ss.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Ss.jsx)("span", {
              className: "After",
              children: DD.after
            })]
          }, DD.label)))
        }), (0, Ss.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: wD.owned ? wD.socketed ? (0, Ss.jsxs)(Ss.Fragment, {
            children: [(0, Ss.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: KD("skyblockGame:lampLightSocketed")
            }), (0, Ss.jsx)(es.Y, {
              disabled: !pD.canCommand,
              ariaLabel: KD("skyblockGame:lampLightRemoveLabel", {
                charm: wD.name
              }),
              onClick: () => {
                sD.socket(null)
              },
              children: KD("skyblockGame:lampLightRemove")
            })]
          }) : (0, Ss.jsx)(es.f, {
            disabled: !pD.canCommand || !rD.heldRod,
            ariaLabel: KD("skyblockGame:lampLightSocketLabel", {
              charm: wD.name
            }),
            onClick: () => {
              sD.socket(wD.id)
            },
            children: KD("skyblockGame:lampLightSocket")
          }) : (0, Ss.jsx)(es.f, {
            disabled: !pD.canCommand || !wD.affordable,
            ariaLabel: KD("skyblockGame:lampLightBuyLabel", {
              item: wD.name,
              cost: wD.cost
            }),
            onClick: () => {
              sD.buy(wD.id)
            },
            children: wD.cost
          })
        })]
      })
    }

    function Or(DD) {
      var zD;
      let {
        tint: wD,
        view: pD,
        controller: sD
      } = DD;
      const {
        t: KD
      } = (0, bs.E)();
      return (0, Ss.jsxs)("li", {
        className: Qs()("SkyblockLampLightTint", wD.wearing && "Wearing"),
        style: {
          "--tint-colour": wD.colour
        },
        children: [(null === (zD = pD.sparkle) || void 0 === zD ? void 0 : zD.id) === wD.id && (0, Ss.jsx)(nr, {}, pD.sparkle.count), (0, Ss.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Ss.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: wD.name
        }), wD.wearing ? (0, Ss.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: KD("skyblockGame:lampLightWearing")
        }) : (0, Ss.jsx)(es.f, {
          disabled: !pD.canCommand || !wD.owned && !wD.affordable,
          ariaLabel: wD.owned ? KD("skyblockGame:lampLightWearLabel", {
            tint: wD.name
          }) : KD("skyblockGame:lampLightBuyLabel", {
            item: wD.name,
            cost: wD.cost
          }),
          onClick: () => {
            wD.owned ? sD.wearTint(wD.id) : sD.buy(wD.id)
          },
          children: wD.owned ? KD("skyblockGame:lampLightWear") : wD.cost
        })]
      })
    }

    function Jr(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(lp, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)(),
        sD = wD.shop;
      return (0, Ss.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Ss.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: wD.balance
          }), (0, Ss.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": wD.releasing,
            className: Qs()("SkyblockLampLightSwitch", wD.releasing && "On"),
            disabled: wD.releasing ? "ready" !== wD.status : !wD.canCommand,
            onClick: () => {
              zD.setRelease(!wD.releasing)
            },
            children: [(0, Ss.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Ss.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), pD("skyblockGame:lampLightRelease")]
          }), (0, Ss.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: pD("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== wD.notice && (0, Ss.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: wD.notice
        }), null !== sD && (0, Ss.jsxs)(Ss.Fragment, {
          children: [(0, Ss.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Ss.jsx)("h3", {
              children: pD("skyblockGame:lampLightCharms")
            }), (0, Ss.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: sD.oddsFor
            }), (0, Ss.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((DD => (0, Ss.jsx)("button", {
                type: "button",
                "aria-pressed": wD.situation === DD,
                className: Qs()("SkyblockLampLightSituation", wD.situation === DD && "Selected"),
                onClick: () => {
                  zD.setSituation(DD)
                },
                children: pD("open" === DD ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, DD)))
            })]
          }), !sD.heldRod && (0, Ss.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: pD("skyblockGame:lampLightHoldRod")
          }), (0, Ss.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: sD.charms.map((DD => (0, Ss.jsx)(Mr, {
              charm: DD,
              view: wD,
              controller: zD
            }, DD.id)))
          }), (0, Ss.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Ss.jsx)("h3", {
              children: pD("skyblockGame:lampLightTints")
            })
          }), (0, Ss.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Ss.jsxs)("li", {
              className: Qs()("SkyblockLampLightTint", "Islands", sD.wearingIslandColours && "Wearing"),
              children: [(0, Ss.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Ss.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: pD("skyblockGame:lampLightIslandColours")
              }), sD.wearingIslandColours ? (0, Ss.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: pD("skyblockGame:lampLightWearing")
              }) : (0, Ss.jsx)(es.f, {
                disabled: !wD.canCommand,
                ariaLabel: pD("skyblockGame:lampLightWearLabel", {
                  tint: pD("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  zD.wearTint(null)
                },
                children: pD("skyblockGame:lampLightWear")
              })]
            }), sD.tints.map((DD => (0, Ss.jsx)(Or, {
              tint: DD,
              view: wD,
              controller: zD
            }, DD.id)))]
          })]
        })]
      })
    }

    function Er(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(lp, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)();
      return wD.releasing ? (0, Ss.jsx)(Vs.g, {
        children: (0, Ss.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            zD.setRelease(!1)
          },
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Ss.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [pD("skyblockGame:lampLightReleasing"), " \xb7 ", wD.balance]
          }), (0, Ss.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: pD("skyblockGame:lampLightKeepCatches")
          }), null !== wD.gained && (0, Ss.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: wD.gained.text
          }, wD.gained.count)]
        })
      }) : null
    }

    function Qr(DD) {
      let {
        island: zD,
        view: wD,
        aim: pD
      } = DD;
      const {
        t: sD
      } = (0, bs.E)(), KD = zD.featuredFish;
      return (0, Ss.jsxs)("li", {
        className: Qs()("SkyblockKeepersChairIsland", `Island-${zD.id}`, zD.favoured && "Aimed", !zD.relit && "Dark"),
        children: [(0, Ss.jsx)("h3", {
          children: zD.name
        }), zD.relit && null !== KD ? (0, Ss.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: sD("skyblockGame:keepersChairTideNotice")
          }), (0, Ss.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Ss.jsx)(Cs.d, {
              itemName: KD.itemName,
              amount: 0
            })
          }), (0, Ss.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: KD.displayName
          })]
        }) : (0, Ss.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Ss.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: sD("skyblockGame:keepersChairDark")
          })
        }), zD.relit && (zD.favoured ? (0, Ss.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: sD("skyblockGame:keepersChairAimed")
        }) : (0, Ss.jsx)(es.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !wD.canAim,
          ariaLabel: sD("skyblockGame:keepersChairAimLabel", {
            island: zD.name
          }),
          onClick: () => {
            pD(zD.id)
          },
          children: sD("skyblockGame:keepersChairAim")
        }))]
      }, zD.favoured ? wD.aimedCount : 0)
    }

    function Xr(DD) {
      let {
        controller: zD,
        lampLight: wD
      } = DD;
      const pD = (0, ds.k)(Cp, zD.getSnapshot()),
        sD = (0, ds.k)(lp, wD.getSnapshot()),
        [KD, rD] = (0, VD.useState)("lamp"),
        {
          t: LD
        } = (0, bs.E)(),
        cD = as();
      if (!pD.enabled) return null;
      const gD = "light" === KD && sD.enabled;
      return (0, Ss.jsx)(ms.c, {
        show: pD.open,
        close: zD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: Qs()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", gD && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: cD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: LD("skyblockGame:keepersChairTitle")
              }), (0, Ss.jsx)("p", {
                children: LD(gD ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              ariaLabel: LD("skyblockGame:keepersChairClose"),
              onClick: zD.dismiss
            })]
          }), sD.enabled && (0, Ss.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((DD => (0, Ss.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === DD === gD,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === DD === gD ? "true" : void 0,
              className: Qs()("SkyblockKeepersChairTab", "light" === DD === gD && "Selected"),
              onClick: () => {
                rD(DD)
              },
              children: [LD("lamp" === DD ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === DD && (0, Ss.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: sD.balance
              })]
            }, DD)))
          }), gD ? (0, Ss.jsx)(Jr, {
            controller: wD
          }) : (0, Ss.jsx)(Vr, {
            view: pD,
            controller: zD
          })]
        })
      })
    }

    function Vr(DD) {
      let {
        view: zD,
        controller: wD
      } = DD;
      const {
        t: pD
      } = (0, bs.E)();
      return (0, Ss.jsxs)(Ss.Fragment, {
        children: [(0, Ss.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: zD.islands.map((DD => (0, Ss.jsx)(Qr, {
            island: DD,
            view: zD,
            aim: wD.aim
          }, DD.id)))
        }), null !== zD.almanac && (0, Ss.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: pD("skyblockGame:passageTitle")
          }), (0, Ss.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Ss.jsx)(Ir, {
              phase: zD.almanac.phase
            }), zD.almanac.phaseName]
          }), (0, Ss.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Ss.jsx)(Ir, {
              phase: zD.almanac.nextPhase
            }), zD.almanac.next]
          })]
        }), (0, Ss.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: pD("skyblockGame:keepersChairFavour")
          }), zD.aimed && (0, Ss.jsx)(es.Y, {
            className: "SkyblockKeepersChairRest",
            disabled: !zD.canAim,
            onClick: () => {
              wD.aim(null)
            },
            children: pD("skyblockGame:keepersChairRest")
          })]
        }), null !== zD.status && (0, Ss.jsx)("p", {
          className: Qs()("SkyblockKeepersChairStatus", "refused" === zD.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: zD.status.text
        })]
      })
    }

    function Pr(DD) {
      let {
        controller: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)(), pD = (0, ds.k)(Tp, zD.getSnapshot());
      if (!pD.enabled) return null;
      const sD = pD.freshCount > 0 ? wD("skyblockGame:reachLogOpenNews", {
        count: pD.freshCount
      }) : wD("skyblockGame:reachLogOpen");
      return (0, Ss.jsx)(Vs.g, {
        placement: "statBars",
        children: (0, Ss.jsxs)("button", {
          type: "button",
          className: Qs()("SkyblockReachLogButton", pD.freshCount > 0 && "HasNews", pD.pending && "Pending"),
          "aria-label": sD,
          title: sD,
          onClick: zD.ask,
          children: [pD.news && (0, Ss.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${pD.newsToken}`), (0, Ss.jsx)("span", {
            className: Qs()("SkyblockReachLogIcon", pD.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Ss.jsx)(Cs.d, {
              itemName: jp,
              amount: 0
            })
          }, `icon:${pD.newsToken}`), pD.freshCount > 0 && (0, Ss.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: pD.freshCount
          })]
        })
      })
    }

    function Cr(DD) {
      let {
        gift: zD
      } = DD;
      return (0, Ss.jsx)("li", {
        className: Qs()("SkyblockRegularsGift", zD.given && "Given"),
        children: zD.text
      })
    }

    function xr(DD) {
      let {
        regular: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)();
      return (0, Ss.jsxs)("li", {
        className: Qs()("SkyblockRegularsCard", zD.tagged ? "Tagged" : "Untagged", zD.resting && "Resting"),
        children: [(0, Ss.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: zD.fishName,
            children: (0, Ss.jsx)(Cs.d, {
              itemName: zD.itemName,
              amount: 0
            })
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Ss.jsx)("h3", {
              children: zD.name
            }), (0, Ss.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: zD.fishName
            })]
          })]
        }), (0, Ss.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: zD.line
        }), (0, Ss.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: zD.size
          }), zD.tagged && (0, Ss.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: zD.resting ? wD("skyblockGame:regularsResting") : zD.meetings
          })]
        }), (0, Ss.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: zD.chance
        }), (0, Ss.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: zD.gifts.map((DD => (0, Ss.jsx)(Cr, {
            gift: DD
          }, DD.text)))
        }), zD.history.length > 0 && (0, Ss.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: zD.history.map(((DD, zD) => (0, Ss.jsx)("li", {
            children: DD
          }, zD)))
        })]
      })
    }

    function Tr(DD) {
      let {
        controller: zD,
        island: wD
      } = DD;
      const {
        t: pD
      } = (0, bs.E)(), sD = (0, ds.k)(ws, zD.getSnapshot()), KD = sD.islands.find((DD => DD.id === wD));
      if (!sD.enabled || void 0 === KD) return null;
      const rD = pD("skyblockGame:regularsOpen");
      return (0, Ss.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": rD,
        title: rD,
        onClick: () => {
          zD.openIsland(wD)
        },
        children: [(0, Ss.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: pD("skyblockGame:regularsTitle")
        }), KD.regulars.map((DD => (0, Ss.jsx)("span", {
          className: Qs()("SkyblockRegularsStripIcon", DD.tagged && "Tagged"),
          title: DD.name,
          children: (0, Ss.jsx)(Cs.d, {
            itemName: DD.itemName,
            amount: 0
          })
        }, DD.id)))]
      })
    }

    function br(DD) {
      var zD;
      let {
        controller: wD
      } = DD;
      const pD = (0, ds.k)(ws, wD.getSnapshot()),
        {
          t: sD
        } = (0, bs.E)(),
        KD = as();
      if (!pD.enabled) return null;
      const rD = null !== (zD = pD.islands.find((DD => DD.id === pD.selected))) && void 0 !== zD ? zD : null;
      return (0, Ss.jsx)(ms.c, {
        show: pD.open,
        close: wD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: KD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: sD("skyblockGame:regularsTitle")
              }), (0, Ss.jsx)("p", {
                children: sD("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              onClick: wD.dismiss
            })]
          }), (0, Ss.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: pD.islands.map((DD => {
              const zD = DD.id === pD.selected;
              return (0, Ss.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": zD,
                "data-pad-tab": !0,
                "data-pad-selected": zD ? "true" : void 0,
                className: Qs()("SkyblockReachLogTab", `Island-${DD.id}`, zD && "Selected", DD.charm.given && "GoldPage"),
                onClick: () => {
                  wD.selectIsland(DD.id)
                },
                children: (0, Ss.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: DD.name
                })
              }, DD.id)
            }))
          }), (0, Ss.jsxs)("div", {
            className: Qs()("SkyblockRegularsPage", null !== rD && `Island-${rD.id}`),
            role: "tabpanel",
            children: [(0, Ss.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: sD("skyblockGame:regularsHow")
            }), null !== rD && (0, Ss.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: rD.regulars.map((DD => (0, Ss.jsx)(xr, {
                regular: DD
              }, DD.id)))
            })]
          }), null !== rD && (0, Ss.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Ss.jsx)("span", {
              className: Qs()("SkyblockRegularsCharm", rD.charm.given && "Given"),
              children: rD.charm.text
            })
          })]
        })
      })
    }
    const jr = [{
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
      dr = Array.from({
        length: 6
      }, ((DD, zD) => ({
        "--x": `${(88*(.618034*zD%1)).toFixed(1)}%`,
        "--y": `${(10+37*zD%70).toFixed(1)}%`,
        "--size": 7 + zD % 3 * 3 + "rem",
        "--drift-x": 3 * (zD % 3 - 1) + "rem",
        "--drift-y": 2 * (zD % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + zD % 4 * 3 + "s",
        "--delay": 2.5 * -zD + "s"
      }))),
      Sr = Array.from({
        length: 14
      }, ((DD, zD) => ({
        "--left": `${(3+94*((.618034*zD+.3)%1)).toFixed(1)}%`,
        "--size": 4 + zD % 4 * 2 + "px",
        "--sway": zD % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*zD%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*zD%12).toFixed(2)}s`
      }))),
      ir = (0, VD.memo)((function(DD) {
        let {
          island: zD
        } = DD;
        return (0, Ss.jsxs)("div", {
          className: Qs()("SkyblockReachLogDepths", null !== zD && `Island-${zD}`),
          "aria-hidden": "true",
          children: [jr.map(((DD, zD) => (0, Ss.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: DD
          }, `shaft${zD}`))), dr.map(((DD, zD) => (0, Ss.jsx)("span", {
            className: Qs()("SkyblockReachLogMote", zD % 2 === 1 && "Violet"),
            style: DD
          }, `mote${zD}`))), Sr.map(((DD, zD) => (0, Ss.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: DD
          }, `bubble${zD}`)))]
        })
      })),
      lr = 100;

    function Wr(DD) {
      let {
        view: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)();
      if (null === zD || 0 === zD.total) return null;
      const pD = lr * zD.aspect,
        sD = wD("skyblockGame:hiddenWatersCount", {
          found: zD.found,
          total: zD.total
        });
      return (0, Ss.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${wD("skyblockGame:hiddenWatersTitle")}: ${sD}`,
        children: [(0, Ss.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${pD}`,
          "aria-hidden": "true",
          children: [zD.islands.map(((DD, zD) => (0, Ss.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (DD.left + DD.width / 2) * lr,
            cy: (DD.top + DD.height / 2) * pD,
            rx: DD.width / 2 * lr,
            ry: DD.height / 2 * pD
          }, zD))), zD.pins.map(((DD, zD) => (0, Ss.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: DD.left * lr,
            cy: DD.top * pD,
            r: 13
          }, zD)))]
        }), (0, Ss.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: wD("skyblockGame:hiddenWatersTitle")
          }), (0, Ss.jsx)("span", {
            className: zD.found === zD.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: sD
          })]
        })]
      })
    }

    function Nr(DD) {
      let {
        view: zD,
        island: wD
      } = DD;
      const {
        t: pD
      } = (0, bs.E)(), sD = null === zD || void 0 === zD ? void 0 : zD.glimpses.get(wD);
      return void 0 === sD || 0 === sD.length ? null : (0, Ss.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Ss.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: pD("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Ss.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: sD.map((DD => (0, Ss.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Ss.jsx)(Cs.d, {
              itemName: DD,
              amount: 0
            })
          }, DD)))
        })]
      })
    }
    const Zr = ["Bronze", "Silver", "Gold"],
      yr = [{
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
      kr = yr.slice(0, 2);

    function mr(DD) {
      return DD ? yr : kr
    }

    function er(DD) {
      let {
        fish: zD,
        letGoShown: wD
      } = DD;
      const {
        t: pD
      } = (0, bs.E)();
      return (0, Ss.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Zr.map(((DD, wD) => {
          const sD = wD < zD.marks;
          return (0, Ss.jsx)("span", {
            className: Qs()("SkyblockReachLogPip", DD, sD && "Earned", sD && zD.fresh && wD === zD.marks - 1 && "Newest"),
            title: pD(bp[wD])
          }, DD)
        })), (0, Ss.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), mr(wD).map(((DD, wD) => (0, Ss.jsx)("span", {
          className: Qs()("SkyblockReachLogRibbon", DD.className, !0 === zD.ribbons[wD] && "Earned"),
          title: pD(DD.titleKey)
        }, DD.className)))]
      })
    }

    function or(DD) {
      let {
        letGoShown: zD,
        haloShown: wD
      } = DD;
      const {
        t: pD
      } = (0, bs.E)();
      return (0, Ss.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Ss.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: pD("skyblockGame:reachLogMarks"),
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), pD("skyblockGame:reachLogLegendMarks")]
        }), mr(zD).map((DD => (0, Ss.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: pD(DD.titleKey),
          children: [(0, Ss.jsx)("span", {
            className: Qs()("SkyblockReachLogRibbon", DD.className, "Earned")
          }), pD(DD.legendKey)]
        }, DD.className))), (0, Ss.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: pD("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), pD("skyblockGame:reachLogLegendGlimmer")]
        }), wD && (0, Ss.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: pD("skyblockGame:reachLogHaloTitle"),
          children: [(0, Ss.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), pD("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function ar(DD) {
      let {
        returner: zD
      } = DD;
      return (0, Ss.jsxs)("div", {
        className: Qs()("SkyblockReachLogReturner", zD.back && "Back"),
        children: [(0, Ss.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Ss.jsx)(Cs.d, {
            itemName: zD.itemName,
            amount: 0
          })
        }), (0, Ss.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: zD.line
        })]
      })
    }

    function ur(DD) {
      let {
        fish: zD,
        letGoShown: wD
      } = DD;
      const {
        t: pD
      } = (0, bs.E)();
      return (0, Ss.jsxs)("li", {
        className: Qs()("SkyblockReachLogCard", zD.caught ? "Caught" : "Unknown", zD.marks >= 3 && "GoldCard", zD.fresh && "Fresh", zD.visitor && "Visitor"),
        children: [zD.visitor && (0, Ss.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: pD("skyblockGame:reachLogVisitor")
        }), zD.fresh && Array.from({
          length: 4
        }, ((DD, zD) => (0, Ss.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, zD))), (0, Ss.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [zD.halo && (0, Ss.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: pD("skyblockGame:reachLogHaloTitle")
          }), (0, Ss.jsx)(Cs.d, {
            itemName: zD.itemName,
            amount: 0
          }), zD.glimmer && (0, Ss.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: pD("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Ss.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: zD.name
        }), (0, Ss.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: zD.chance
        }), (0, Ss.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: zD.best
        }), (0, Ss.jsx)(er, {
          fish: zD,
          letGoShown: wD
        })]
      })
    }

    function vr(DD) {
      let {
        page: zD,
        letGoShown: wD,
        hiddenWaters: pD
      } = DD;
      const {
        t: sD
      } = (0, bs.E)();
      return zD.awake ? (0, Ss.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: zD.fish.map((DD => (0, Ss.jsx)(ur, {
          fish: DD,
          letGoShown: wD
        }, DD.itemName)))
      }) : (0, Ss.jsxs)(Ss.Fragment, {
        children: [(0, Ss.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: sD("skyblockGame:reachLogAsleep")
        }), (0, Ss.jsx)(Nr, {
          view: pD,
          island: zD.id
        })]
      })
    }

    function tr(DD) {
      var zD, wD;
      let {
        controller: pD,
        regulars: sD,
        hiddenWaters: KD
      } = DD;
      const rD = (0, ds.k)(Tp, pD.getSnapshot()),
        LD = function(DD) {
          return (0, ds.k)(Ls, DD.getSnapshot())
        }(KD),
        cD = (0, ds.k)(ws, sD.getSnapshot()),
        {
          t: gD
        } = (0, bs.E)(),
        RD = as();
      if (!rD.enabled) return null;
      const AD = null !== (zD = rD.pages.find((DD => DD.id === rD.selected))) && void 0 !== zD ? zD : null;
      return (0, Ss.jsx)(ms.c, {
        show: rD.open,
        close: pD.dismiss,
        togglePointerLock: !1,
        className: Qs()("SkyblockSkillsOverlay", cD.open && "SkyblockReachLogUnderLedger"),
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: RD,
          onKeyDown: os,
          children: [(0, Ss.jsx)(ir, {
            island: null !== (wD = null === AD || void 0 === AD ? void 0 : AD.id) && void 0 !== wD ? wD : null
          }), (0, Ss.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: gD("skyblockGame:reachLogTitle")
              }), (0, Ss.jsx)("p", {
                children: gD("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Ss.jsx)(Wr, {
              view: LD
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              onClick: pD.dismiss
            })]
          }), (0, Ss.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: rD.pages.map((DD => {
              const zD = DD.id === rD.selected,
                wD = DD.fish.some((DD => DD.fresh));
              return (0, Ss.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": zD,
                "data-pad-tab": !0,
                "data-pad-selected": zD ? "true" : void 0,
                className: Qs()("SkyblockReachLogTab", `Island-${DD.id}`, zD && "Selected", !DD.awake && "Asleep", DD.gold && "GoldPage", wD && "HasNews"),
                onClick: () => {
                  pD.selectPage(DD.id)
                },
                children: [(0, Ss.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: DD.name
                }), DD.awake && (0, Ss.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: gD("skyblockGame:reachLogCaughtCount", {
                    caught: DD.caught,
                    total: DD.total
                  })
                })]
              }, DD.id)
            }))
          }), (0, Ss.jsxs)("div", {
            className: Qs()("SkyblockReachLogPage", null !== AD && `Island-${AD.id}`),
            role: "tabpanel",
            children: [null !== AD && (0, Ss.jsx)(vr, {
              page: AD,
              letGoShown: rD.letGoShown,
              hiddenWaters: LD
            }), !0 === (null === AD || void 0 === AD ? void 0 : AD.awake) && null !== AD.returner && (0, Ss.jsx)(ar, {
              returner: AD.returner
            }), !0 === (null === AD || void 0 === AD ? void 0 : AD.awake) && (0, Ss.jsx)(Tr, {
              controller: sD,
              island: AD.id
            })]
          }), (0, Ss.jsx)("footer", {
            className: Qs()("SkyblockReachLogFooter", null !== AD && `Island-${AD.id}`, !0 === (null === AD || void 0 === AD ? void 0 : AD.gold) && "GoldPage"),
            children: !0 === (null === AD || void 0 === AD ? void 0 : AD.gold) ? (0, Ss.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: gD("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Ss.jsxs)(Ss.Fragment, {
              children: [(0, Ss.jsx)(or, {
                letGoShown: rD.letGoShown,
                haloShown: !0 === (null === AD || void 0 === AD ? void 0 : AD.fish.some((DD => DD.halo)))
              }), (0, Ss.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: gD("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Fr = wD(4849);

    function Yr(DD) {
      let {
        conversation: zD,
        completedLabel: wD
      } = DD;
      return (0, Ss.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Ss.jsxs)("header", {
          children: [(0, Ss.jsx)("h3", {
            children: zD.questName
          }), zD.completed && (0, Ss.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: wD
          })]
        }), zD.lines.map((DD => (0, Ss.jsx)(Fr.e, {
          display: DD.display
        }, DD.key)))]
      })
    }

    function Hr(DD) {
      let {
        controller: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)(), pD = (0, ds.k)(gs, zD.getSnapshot()), sD = as();
      if (!pD.enabled) return null;
      const KD = !pD.loading && 0 === pD.conversations.length;
      return (0, Ss.jsx)(ms.c, {
        show: pD.open,
        close: zD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: sD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: wD("skyblockDialogue:title")
              }), (0, Ss.jsx)("p", {
                children: wD("skyblockDialogue:intro")
              })]
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              onClick: zD.dismiss
            })]
          }), (0, Ss.jsxs)("div", {
            className: Qs()("SkyblockDialogueBody", {
              SingleColumn: null !== pD.questFocus || 0 === pD.characters.length
            }),
            children: [null === pD.questFocus && pD.characters.length > 0 && (0, Ss.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: pD.characters.map((DD => (0, Ss.jsx)(es.f, {
                className: Qs()("SkyblockDialogueCharacter", {
                  Selected: DD.selected
                }),
                onClick: () => {
                  zD.selectCharacter(DD.id)
                },
                children: (0, Ss.jsx)(xs.e, {
                  text: DD.styling
                })
              }, DD.id)))
            }), (0, Ss.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== pD.questFocus && (0, Ss.jsx)(es.f, {
                className: "SkyblockDialogueBack",
                onClick: zD.showCharacters,
                children: wD("skyblockDialogue:allCharacters")
              }), pD.loading && (0, Ss.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: wD("skyblockDialogue:loading")
              }), KD && (0, Ss.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: wD(null === pD.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), pD.conversations.map((DD => (0, Ss.jsx)(Yr, {
                conversation: DD,
                completedLabel: pD.completedLabel
              }, DD.questId)))]
            })]
          })]
        })
      })
    }

    function qr(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(Is, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)(),
        sD = as();
      return wD.enabled ? (0, Ss.jsx)(ms.c, {
        show: wD.open,
        close: zD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: sD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: pD("skyblockGame:autographBook")
              }), (0, Ss.jsx)("p", {
                children: pD("skyblockGame:autographBookIntro")
              })]
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              onClick: zD.dismiss
            })]
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Ss.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Ss.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Ss.jsx)("strong", {
                  children: wD.total
                }), (0, Ss.jsx)("span", {
                  children: pD("skyblockGame:autographTotal")
                })]
              }), (0, Ss.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Ss.jsx)("strong", {
                  children: wD.rankTotal
                }), (0, Ss.jsx)("span", {
                  children: pD("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === wD.entries.length ? (0, Ss.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: pD("skyblockGame:autographBookEmpty")
            }) : (0, Ss.jsx)("ul", {
              className: "SkyblockAutographList",
              children: wD.entries.map((DD => (0, Ss.jsxs)("li", {
                className: Qs()("SkyblockAutograph", {
                  Ranked: null !== DD.rank
                }),
                style: null === DD.rank ? void 0 : {
                  color: DD.rank.colour
                },
                children: [null !== DD.rank && (0, Ss.jsx)(GK.e, {
                  className: "SkyblockAutographRankIcon",
                  name: DD.rank.icon,
                  kit: (0, GK.f)(DD.rank.icon)
                }), (0, Ss.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Ss.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: DD.name
                  }), (0, Ss.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== DD.rank && (0, Ss.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: DD.rank.label
                    }), (0, Ss.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: DD.signedOn
                    })]
                  })]
                })]
              }, DD.key)))
            })]
          })]
        })
      }) : null
    }
    const DL = (0, VD.memo)((function(DD) {
        let {
          controller: zD
        } = DD;
        return (0, Ss.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: zD.display.mountWaypoint,
          children: [(0, Ss.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Ss.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Ss.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Ss.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Ss.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Ss.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      zL = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function wL(DD) {
      return "next" === DD.phase ? "\u2192" : zL[DD.kind]
    }
    const pL = (0, VD.memo)((function(DD) {
      let {
        controller: zD,
        display: wD
      } = DD;
      const pD = (0, ds.k)(Aw, zD.getNotificationSnapshot()),
        [sD, KD] = (0, VD.useState)(!1);
      return (0, ds.g)("qteStateUpdated", (DD => {
        KD(DD.isActive)
      })), (0, Ss.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (sD ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [pD && (0, Ss.jsxs)("div", {
          className: `SkyblockQuestNotification ${pD.kind} ${pD.phase}`,
          style: {
            "--quest-notification-duration": `${pD.durationMs}ms`,
            ...pD.accent && {
              "--quest-notification-accent": pD.accent
            }
          },
          children: [(0, Ss.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (pD.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Ss.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: wL(pD)
            }), pD.iconItem && (0, Ss.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Ss.jsx)(Cs.d, {
                itemName: pD.iconItem,
                amount: 0
              })
            })]
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Ss.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: pD.title
            }), (0, Ss.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Ss.jsx)(gK.d, {
                text: pD.name
              })
            }), pD.description && (0, Ss.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Ss.jsx)(gK.d, {
                text: pD.description
              })
            }), pD.reward && (0, Ss.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Ss.jsx)(gK.d, {
                text: pD.reward
              })
            })]
          })]
        }, pD.token), (null === pD || void 0 === pD ? void 0 : pD.waypointNameKey) && (0, Ss.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": pD.waypointNameKey,
          "data-notification-token": pD.token,
          ref: wD.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${pD.token}`)]
      })
    }));

    function sL(DD) {
      const zD = parseInt(DD.replace("#", ""), 16);
      return `${zD>>16&255}, ${zD>>8&255}, ${255&zD}`
    }
    const KL = (0, VD.memo)((function(DD) {
      let {
        controller: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)(), pD = (0, ds.k)(Nw, zD.getSnapshot());
      if (!pD) return null;
      const sD = "arrival" === pD.phase;
      return (0, Ss.jsxs)("div", {
        className: Qs()("SkyblockPortalTransit", {
          Departure: !sD,
          Arrival: sD
        }),
        style: {
          "--portal-rgb": sL(pD.colour),
          "--portal-duration": `${pD.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Ss.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Ss.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            zD.finishArrival(pD.token)
          }
        }), (0, Ss.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Ss.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !sD && (0, Ss.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: wD("skyblockGame:portalTransitHeading")
          }), (0, Ss.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: wD(pD.zoneNameKey)
          })]
        })]
      }, pD.token)
    }));

    function rL() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function LL() {
      const DD = document.querySelector(".SkyblockHudCoins"),
        zD = null === DD || void 0 === DD ? void 0 : DD.getBoundingClientRect();
      return zD && zD.width > 0 ? {
        x: zD.left + Math.min(zD.width, 24) / 2,
        y: zD.top + zD.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function cL(DD) {
      return {
        x: DD.left + DD.width / 2,
        y: DD.top + DD.height / 2
      }
    }

    function gL() {
      var DD;
      const zD = null === (DD = document.querySelector(".HotBar")) || void 0 === DD ? void 0 : DD.getBoundingClientRect();
      return zD && zD.width > 0 ? cL(zD) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function RL(DD) {
      let {
        items: zD,
        origins: wD,
        target: pD
      } = DD;
      return (0, Ss.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: zD.map(((DD, zD) => {
          const sD = wD[zD];
          return (0, Ss.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${sD.x}px`,
              top: `${sD.y}px`,
              "--item-dx": pD.x - sD.x + "px",
              "--item-dy": pD.y - sD.y + "px",
              "--item-delay": 2e3 + 160 * zD + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Ss.jsx)(Cs.d, {
              itemName: DD.dailyRewardItemName,
              amount: 0
            })
          }, DD.dailyRewardItemName)
        }))
      })
    }

    function AL(DD, zD) {
      const wD = -Math.PI / 2 + 1.25 * (DD / (zD - 1) * 2 - 1),
        pD = 70 + DD % 3 * 22;
      return {
        x: Math.cos(wD) * pD,
        y: Math.sin(wD) * pD * .7
      }
    }

    function UL(DD) {
      let {
        origin: zD,
        target: wD,
        count: pD
      } = DD;
      const sD = [];
      for (let KD = 0; KD < pD; KD++) {
        const DD = AL(KD, pD);
        sD.push((0, Ss.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${zD.x}px`,
            top: `${zD.y}px`,
            "--coin-bx": `${DD.x}px`,
            "--coin-by": `${DD.y}px`,
            "--coin-dx": wD.x - zD.x + "px",
            "--coin-dy": wD.y - zD.y + "px",
            "--coin-delay": `${ow(KD,pD)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Ss.jsx)(Cs.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, KD))
      }
      return (0, Ss.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: sD
      })
    }

    function fL(DD) {
      let {
        day: zD
      } = DD;
      const wD = PD[zD - 1];
      return (0, Ss.jsxs)(Ss.Fragment, {
        children: [(0, Ss.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Ss.jsx)(Cs.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Ts.f)(wD.dailyRewardCoins)]
        }), wD.dailyRewardItems.map((DD => (0, Ss.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Ss.jsx)(Cs.d, {
            itemName: DD.dailyRewardItemName,
            amount: 0
          }), "\xd7", DD.dailyRewardItemAmount]
        }, DD.dailyRewardItemName)))]
      })
    }

    function IL(DD) {
      let {
        day: zD
      } = DD;
      const wD = xD(zD);
      return (0, Ss.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: PD.map(((DD, pD) => {
          const sD = pD + 1;
          return (0, Ss.jsxs)("li", {
            className: Qs()("SkyblockDailyRewardTile", {
              Claimed: sD < zD && sD !== wD,
              Today: sD === zD,
              Tomorrow: sD === wD,
              Jackpot: sD === CD
            }),
            children: [(0, Ss.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: sD
            }), (0, Ss.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Ss.jsx)(Cs.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Ts.f)(DD.dailyRewardCoins)]
            }), DD.dailyRewardItems.map((DD => (0, Ss.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Ss.jsx)(Cs.d, {
                itemName: DD.dailyRewardItemName,
                amount: 0
              }), "\xd7", DD.dailyRewardItemAmount]
            }, DD.dailyRewardItemName)))]
          }, sD)
        }))
      })
    }

    function BL(DD) {
      let {
        view: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)(), pD = (0, VD.useRef)(null), sD = (0, VD.useRef)(null), [KD, rD] = (0, VD.useState)(null);
      (0, VD.useLayoutEffect)((() => {
        var DD;
        const zD = null === (DD = pD.current) || void 0 === DD ? void 0 : DD.getBoundingClientRect();
        if (zD) {
          var wD, KD;
          const DD = Array.from(null !== (wD = null === (KD = sD.current) || void 0 === KD ? void 0 : KD.children) && void 0 !== wD ? wD : [], (DD => cL(DD.getBoundingClientRect())));
          rD({
            origin: cL(zD),
            target: LL(),
            itemOrigins: DD,
            itemTarget: gL()
          })
        }
      }), []);
      const LD = xD(zD.day),
        cD = function(DD, zD) {
          const [wD, pD] = (0, VD.useState)((() => rL() ? DD : 0));
          return (0, VD.useEffect)((() => {
            if (rL()) return;
            const wD = performance.now();
            let sD = 0;
            const KD = rD => {
              const LD = Math.min(Math.max((rD - wD) / zD, 0), 1);
              pD(Math.round(DD * (1 - (1 - LD) ** 3))), LD < 1 && (sD = requestAnimationFrame(KD))
            };
            return sD = requestAnimationFrame(KD), () => {
              cancelAnimationFrame(sD)
            }
          }), [DD, zD]), wD
        }(zD.coins, 450);
      return (0, Ss.jsxs)("div", {
        className: Qs()("SkyblockDailyReward", {
          Jackpot: zD.day === CD
        }),
        style: {
          "--daily-duration": `${zD.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Ss.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Ss.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Ss.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Ss.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: wD("skyblockGame:dailyRewardTitle")
            }), (0, Ss.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: wD("skyblockGame:dailyRewardDay", {
                day: String(zD.day)
              })
            })]
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: pD,
            children: [(0, Ss.jsx)(Cs.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Ss.jsxs)("span", {
              children: ["+", (0, Ts.f)(cD)]
            })]
          }), zD.items.length > 0 && (0, Ss.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: sD,
            children: zD.items.map((DD => (0, Ss.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Ss.jsx)(Cs.d, {
                itemName: DD.dailyRewardItemName,
                amount: 0
              }), "\xd7", DD.dailyRewardItemAmount]
            }, DD.dailyRewardItemName)))
          }), (0, Ss.jsx)(IL, {
            day: zD.day
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [wD("skyblockGame:dailyRewardComeBack"), (0, Ss.jsx)(fL, {
              day: LD
            })]
          })]
        }), null !== KD && (0, Ss.jsx)(UL, {
          origin: KD.origin,
          target: KD.target,
          count: zD.flyingCoins
        }), null !== KD && KD.itemOrigins.length === zD.items.length && (0, Ss.jsx)(RL, {
          items: zD.items,
          origins: KD.itemOrigins,
          target: KD.itemTarget
        })]
      })
    }
    const GL = (0, VD.memo)((function(DD) {
        let {
          controller: zD
        } = DD;
        const wD = (0, ds.k)(kw, zD.getSnapshot());
        return wD ? (0, Ss.jsx)(BL, {
          view: wD
        }, wD.token) : null
      })),
      hL = "Gold Coin";

    function nL(DD) {
      return 650 + 220 * DD
    }

    function ML(DD) {
      return {
        "--letter-delay": `${nL(DD)}ms`,
        "--letter-land": `${nL(DD)+300}ms`
      }
    }

    function OL(DD) {
      let {
        letterCount: zD
      } = DD;
      return (0, Ss.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Ss.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Ss.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Ss.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: zD
        }, ((DD, zD) => (0, Ss.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: ML(zD),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, zD)))]
      })
    }

    function JL(DD) {
      var zD, wD, pD;
      let {
        letter: sD,
        index: KD
      } = DD;
      const {
        t: rD
      } = (0, bs.E)(), LD = null !== (zD = null === (wD = sD.items[0]) || void 0 === wD ? void 0 : wD.itemName) && void 0 !== zD ? zD : hL;
      return (0, Ss.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: ML(KD),
        children: [(0, Ss.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Ss.jsx)(Cs.d, {
            itemName: LD,
            amount: 0
          })
        }), (0, Ss.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: rD(sD.reasonKey, null !== (pD = sD.reasonParams) && void 0 !== pD ? pD : void 0)
        }), (0, Ss.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [sD.coins > 0 && (0, Ss.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Ss.jsx)(Cs.d, {
              itemName: hL,
              amount: 0
            }), "+", (0, Ts.f)(sD.coins)]
          }), sD.items.map(((DD, zD) => (0, Ss.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Ss.jsx)(Cs.d, {
              itemName: DD.itemName,
              amount: 0
            }), DD.label, " \xd7", DD.amount]
          }, zD)))]
        })]
      })
    }

    function EL(DD) {
      let {
        view: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)();
      return (0, Ss.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${zD.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${nL(zD.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Ss.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Ss.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Ss.jsx)(OL, {
              letterCount: zD.letters.length
            }), (0, Ss.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: wD("skyblockGame:mailboxTitle")
            })]
          }), (0, Ss.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: zD.letters.map(((DD, zD) => (0, Ss.jsx)(JL, {
              letter: DD,
              index: zD
            }, zD)))
          }), zD.more > 0 && (0, Ss.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: wD("skyblockGame:mailboxMore", {
              count: String(zD.more)
            })
          })]
        })
      })
    }
    const QL = (0, VD.memo)((function(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(uw, zD.getSnapshot());
      return wD ? (0, Ss.jsx)(EL, {
        view: wD
      }, wD.token) : null
    }));

    function XL(DD) {
      let {
        controller: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)(), pD = (0, ds.k)(Np, zD.getSnapshot());
      if (null === pD) return null;
      const sD = pD.fullSet ? "empty" === pD.fuelState ? {
        text: wD("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: wD("skyblockGame:magmawardHudFullSet", {
          worn: String(pD.wornCount)
        }),
        tone: "partial"
      };
      return (0, Ss.jsx)(Vs.g, {
        placement: "statBars",
        children: (0, Ss.jsxs)("div", {
          className: Qs()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${pD.fuelState}`, {
            "SkyblockMagmawardHud-partial": !pD.fullSet,
            "SkyblockMagmawardHud-armed": pD.fullSet && "empty" !== pD.fuelState
          }),
          children: [null !== pD.flare && (0, Ss.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${pD.flare}`
          }, `flare:${pD.flareToken}`), (0, Ss.jsx)("div", {
            className: Qs()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: pD.setLit
            }),
            children: pD.pieces.map(((DD, zD) => (0, Ss.jsx)("div", {
              className: Qs()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: DD.worn,
                SkyblockMagmawardPieceJustWorn: DD.justWorn
              }),
              children: (0, Ss.jsx)(Cs.d, {
                itemName: DD.itemName,
                amount: 0
              })
            }, `${zD}:${DD.wornToken}`)))
          }, `pieces:${pD.setLitToken}`), (0, Ss.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Ss.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Ss.jsxs)("div", {
              className: Qs()("SkyblockMagmawardFuelCounter", pD.pulse && `SkyblockMagmawardFuelCounter-${pD.pulse}`),
              children: [(0, Ss.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Ss.jsx)(Cs.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Ss.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: pD.fuel
              })]
            }, `counter:${pD.pulseToken}`), "burn" === pD.pulse && (0, Ss.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${pD.pulseToken}`)]
          }), sD && (0, Ss.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${sD.tone} SmallTextBold`,
            children: sD.text
          })]
        })
      })
    }

    function VL(DD) {
      let {
        controller: zD
      } = DD;
      const {
        t: wD,
        selectedLanguage: pD
      } = (0, bs.E)(), sD = (0, ds.k)(yp, zD.getSnapshot());
      return null === sD ? null : (0, Ss.jsx)(Vs.g, {
        placement: "statBars",
        children: (0, Ss.jsxs)("div", {
          className: Qs()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: sD.inRange
          }),
          style: {
            "--glowtide-colour": sD.colour
          },
          "aria-label": wD("skyblockGame:glowtideChipLabel"),
          children: [(0, Ss.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), sD.inRange ? (0, Ss.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: wD("skyblockGame:glowtideChipInRange")
          }, `call:${sD.inRangeToken}`) : (0, Ss.jsxs)(Ss.Fragment, {
            children: [(0, Ss.jsx)("div", {
              ref: zD.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Ss.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: wD("skyblockGame:waypointDistance", {
                distance: ED(sD.distance, pD.code)
              })
            })]
          })]
        })
      })
    }

    function PL(DD) {
      let {
        controller: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)(), pD = (0, ds.k)(mp, zD.getSnapshot());
      return null === pD ? null : (0, Ss.jsx)(Vs.g, {
        placement: "statBars",
        children: (0, Ss.jsxs)("div", {
          className: Qs()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: pD.full
          }),
          "aria-label": wD("skyblockGame:glowMeterLabel", {
            fill: String(pD.fill),
            bA: String(pD.bA)
          }),
          children: [pD.burst && (0, Ss.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${pD.burstToken}`), (0, Ss.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Ss.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${pD.ratio})`
              }
            }), pD.gained && (0, Ss.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${pD.gainToken}`), pD.full && Array.from({
              length: 5
            }, ((DD, zD) => (0, Ss.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, zD)))]
          }), pD.full && pD.rares.map((DD => (0, Ss.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Ss.jsx)(Cs.d, {
              itemName: DD,
              amount: 0
            })
          }, DD))), pD.ready && (0, Ss.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Ss.jsx)("span", {
              children: wD("skyblockGame:glowMeterReady")
            })
          }, `ready:${pD.fullToken}`)]
        })
      })
    }

    function CL(DD) {
      let {
        controller: zD
      } = DD;
      const {
        t: wD
      } = (0, bs.E)(), pD = (0, ds.k)(op, zD.getSnapshot());
      if (null === pD) return null;
      const sD = "waiting" === pD.phase,
        KD = {
          animationDuration: `${pD.waitMs}ms`,
          animationDelay: -pD.elapsedMs + "ms"
        },
        rD = sD ? void 0 : {
          animationDuration: `${pD.waitMs}ms`
        };
      return (0, Ss.jsxs)("div", {
        className: sD ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [sD && (0, Ss.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((DD, zD) => (0, Ss.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, zD))), (0, Ss.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: KD
          }), (0, Ss.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Ss.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Ss.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: KD
            })]
          }), (0, Ss.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Ss.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: rD,
          children: wD(pD.line)
        }, pD.lineIndex)]
      }, pD.token)
    }

    function xL(DD) {
      let {
        chart: zD,
        showHere: wD,
        className: pD
      } = DD;
      return (0, Ss.jsx)("div", {
        className: Qs()("SkyblockTideChartGrid", pD, null !== zD.pictureName && "Complete"),
        "aria-hidden": "true",
        children: zD.cells.map(((DD, pD) => {
          const sD = 0 !== (zD.pulseCells & 1 << pD),
            KD = zD.castCell === pD;
          return (0, Ss.jsx)("span", {
            className: Qs()("SkyblockTideChartCell", `Cell-${DD}`, sD && "Pulse", KD && "Cast", wD && zD.hereCell === pD && "Here")
          }, `${pD}:${sD?`p${zD.pulseToken}`:""}:${KD?`c${zD.castToken}`:""}`)
        }))
      })
    }

    function TL(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(vp, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)(),
        sD = wD.chip;
      if (!wD.enabled || null === sD) return null;
      const KD = pD("skyblockGame:tideChartsChipLabel", {
        island: sD.islandName,
        lit: String(sD.lit),
        ink: String(sD.ink)
      });
      return (0, Ss.jsx)(Vs.g, {
        placement: "statBars",
        children: (0, Ss.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Qs()("SkyblockTideChartsChip", wD.open && "Open", null !== sD.pictureName && "Complete"),
          "aria-label": KD,
          title: KD,
          onMouseDown: DD => {
            DD.preventDefault()
          },
          onClick: zD.toggle,
          children: [(0, Ss.jsx)(xL, {
            chart: sD,
            showHere: !1,
            className: "Mini"
          }), (0, Ss.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [sD.lit, "/", sD.ink]
          })]
        })
      })
    }

    function bL(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, ds.k)(vp, zD.getSnapshot()),
        {
          t: pD
        } = (0, bs.E)(),
        sD = as(),
        KD = wD.card;
      return wD.enabled && null !== KD ? (0, Ss.jsx)(ms.c, {
        show: wD.open,
        close: zD.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Ss.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: sD,
          onKeyDown: os,
          children: [(0, Ss.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Ss.jsxs)("div", {
              children: [(0, Ss.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: pD("skyblockGame:tideChartsTitle")
              }), (0, Ss.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: pD("skyblockGame:tideChartsIntro")
              })]
            }), (0, Ss.jsx)(es.k, {
              padIgnore: !0,
              ariaLabel: pD("skyblockGame:tideChartsClose"),
              onClick: zD.dismiss
            })]
          }), wD.tabs.length > 1 && (0, Ss.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": pD("skyblockGame:tideChartsIslands"),
            children: wD.tabs.map((DD => (0, Ss.jsx)("button", {
              type: "button",
              className: Qs()("SkyblockTideChartsTab", DD.selected && "Selected"),
              "aria-pressed": DD.selected,
              onClick: () => {
                zD.HU(DD.island)
              },
              children: DD.name
            }, DD.island)))
          }), (0, Ss.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Ss.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": KD.gridLabel,
              children: (0, Ss.jsx)(xL, {
                chart: KD,
                showHere: !0,
                className: "Large"
              })
            }), (0, Ss.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Ss.jsx)("h3", {
                children: KD.islandName
              }), (0, Ss.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: KD.litText
              }), null === KD.pictureName ? (0, Ss.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: pD("skyblockGame:tideChartsPictureHidden")
              }) : (0, Ss.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: pD("skyblockGame:tideChartsPictureRevealed", {
                  picture: KD.pictureName
                })
              }, KD.pictureName), (0, Ss.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Ss.jsxs)("li", {
                  children: [(0, Ss.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), pD("skyblockGame:tideChartsLegendLit")]
                }), (0, Ss.jsxs)("li", {
                  children: [(0, Ss.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), pD("skyblockGame:tideChartsLegendClear")]
                }), null !== KD.hereCell && (0, Ss.jsxs)("li", {
                  children: [(0, Ss.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), pD("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Ss.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Ss.jsx)("span", {
                  children: wD.turnsText
                }), (0, Ss.jsx)("span", {
                  children: wD.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function jL(DD) {
      var zD;
      let {
        controller: wD
      } = DD;
      const {
        selectedLanguage: pD
      } = (0, bs.E)(), sD = pD.code;
      (0, VD.useEffect)((() => {
        wD.setTranslator(((DD, zD) => (0, bs.z)(sD, DD, zD)), sD, ((DD, zD) => (0, bs.s)(sD, DD, zD)))
      }), [wD, sD]);
      const KD = (0, ds.k)(UD, wD.map.getSnapshot()),
        {
          openInGameMenuName: rD
        } = (0, Xs.n)(["openInGameMenuName"]);
      return (0, Ss.jsxs)(Ss.Fragment, {
        children: [(0, Ss.jsx)(pL, {
          controller: wD.quests,
          display: wD.navigation.display
        }), KD.enabled && !rD && (0, Ss.jsx)(rK, {
          controller: wD.navigation
        }), (0, Ss.jsx)(is, {
          controller: wD,
          minimap: KD.enabled && (null === (zD = KD.presentation) || void 0 === zD ? void 0 : zD.minimap) && (0, Ss.jsx)(KK, {
            view: KD.presentation.minimap,
            navigation: wD.navigation,
            controller: wD.map
          }),
          children: (0, Ss.jsx)(BK, {
            controller: wD.quests,
            surface: "hud"
          })
        }), (0, Ss.jsx)(DL, {
          controller: wD.navigation
        }), (0, Ss.jsx)(KL, {
          controller: wD.portalTransit
        }), (0, Ss.jsx)(GL, {
          controller: wD.dailyReward
        }), (0, Ss.jsx)(QL, {
          controller: wD.mailbox
        }), (0, Ss.jsx)(XL, {
          controller: wD.magmaward
        }), (0, Ss.jsx)(VL, {
          controller: wD.glowtide
        }), (0, Ss.jsx)(Br, {
          controller: wD.passage
        }), (0, Ss.jsx)(TL, {
          controller: wD.tideCharts
        }), (0, Ss.jsx)(PL, {
          controller: wD.glowMeter
        }), (0, Ss.jsx)(Pr, {
          controller: wD.reachLog
        }), (0, Ss.jsx)(CL, {
          controller: wD.hushWait
        }), (0, Ss.jsx)(Er, {
          controller: wD.lampLight
        }), (0, Ss.jsx)(LK, {
          controller: wD.skills,
          surface: "hud"
        })]
      })
    }

    function dL(DD) {
      let {
        controller: zD
      } = DD;
      return (0, Ss.jsxs)(Ss.Fragment, {
        children: [(0, Ss.jsx)(sK, {
          controller: zD.map,
          navigation: zD.navigation
        }), (0, Ss.jsx)(LK, {
          controller: zD.skills,
          surface: "menu"
        }), (0, Ss.jsx)(BK, {
          controller: zD.quests,
          surface: "menu"
        }), (0, Ss.jsx)(FK, {
          controller: zD.dungeons
        }), (0, Ss.jsx)(qK, {
          controller: zD.collections
        }), (0, Ss.jsx)(wr, {
          controller: zD.questGraph
        }), (0, Ss.jsx)(Lr, {
          controller: zD.forge
        }), (0, Ss.jsx)(fr, {
          controller: zD.smuggler
        }), (0, Ss.jsx)(Xr, {
          controller: zD.keepersChair,
          lampLight: zD.lampLight
        }), (0, Ss.jsx)(tr, {
          controller: zD.reachLog,
          regulars: zD.regulars,
          hiddenWaters: zD.hiddenWaters
        }), (0, Ss.jsx)(br, {
          controller: zD.regulars
        }), (0, Ss.jsx)(hr, {
          controller: zD.passage
        }), (0, Ss.jsx)(bL, {
          controller: zD.tideCharts
        }), (0, Ss.jsx)(Hr, {
          controller: zD.dialogue
        }), (0, Ss.jsx)(qr, {
          controller: zD.autographs
        })]
      })
    }
    var SL = wD(36719);
    const iL = zp + cp;

    function lL(DD, zD, wD, pD, sD) {
      const KD = [],
        rD = [],
        LD = wD => {
          const pD = DD.playSound(zD, wD.sound, wD.volume, wD.rate);
          pD && (rD.push(pD), void 0 !== wD.cutAfter && KD.push(setTimeout((() => {
            pD.fade(pD.getVolume(), 0, 300)
          }), wD.cutAfter)))
        };
      for (const cD of function(DD, zD) {
          const wD = [{
            sound: "rpgKnifeSlice1",
            beat: zp,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: zp,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: zp,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: zp,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: zp,
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
            sound: (0, SL.g)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: iL + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, SL.g)("bigDrumSwish"),
            beat: iL + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: iL + 60,
            lead: 180,
            volume: .5 + .06 * DD,
            rate: .82 + .07 * DD
          }];
          return DD >= 4 && wD.push({
            sound: "exp_levelup",
            beat: iL + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), zD && wD.push({
            sound: "trumpetFlare",
            beat: iL + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), wD.push({
            sound: "harp_pling",
            beat: wp,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), wD
        }(wD, pD)) sD ? KD.push(setTimeout((() => {
        LD(cD)
      }), Math.max(0, cD.beat - cD.lead / cD.rate))) : cD.beat !== zp && "magicAccent2" !== cD.sound && "trumpetFlare" !== cD.sound || LD(cD);
      return () => {
        for (const DD of KD) clearTimeout(DD);
        for (const DD of rD) DD.fade(DD.getVolume(), 0, 120)
      }
    }
    class WL {
      constructor(DD) {
        this.deps = DD, this.pending = new Map, this.localHook = null
      }
      hookWaiting(DD, zD) {
        this.pending.delete(DD);
        const wD = this.deps.now();
        if (null === zD) {
          var pD;
          if ((null === (pD = this.localHook) || void 0 === pD ? void 0 : pD.hookId) === DD) {
            const DD = wD >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(DD)
          }
          return
        }
        const sD = wD + zD;
        this.settle(DD, sD) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(DD, {
          untilMs: wD + 1e3,
          biteAtMs: sD
        }))
      }
      getLocalHook() {
        var DD, zD;
        return null !== (DD = null === (zD = this.localHook) || void 0 === zD ? void 0 : zD.hookId) && void 0 !== DD ? DD : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const DD = this.deps.now();
        for (const [zD, {
            untilMs: wD,
            biteAtMs: pD
          }] of this.pending)(this.settle(zD, pD) || DD > wD) && this.pending.delete(zD)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(DD, zD) {
        const wD = this.deps.getLineOwner(DD);
        if (null === wD) return !1;
        if (!this.deps.isLocalPlayer(wD)) return !0;
        if (this.localHook = {
            hookId: DD,
            biteAtMs: zD
          }, !this.deps.isHushWaiting()) {
          const [zD, wD] = this.deps.getHookPosition(DD);
          this.deps.onCastLanded(zD, wD)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var NL = wD(4257);
    const ZL = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      yL = {
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
    class kL {
      constructor(DD) {
        this.deps = DD, this.tell = null
      }
      receiveTell(DD) {
        let {
          biteTellTier: zD
        } = DD;
        this.tell = {
          tier: zD,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(DD) {
        const zD = this.tell;
        if (this.tell = null, !DD) return;
        const wD = null !== zD && this.deps.now() - zD.atMs <= 3e3 ? zD.tier : 0;
        this.deps.vibrate(ZL[wD])
      }
      burstAtHook() {
        const DD = this.tell,
          zD = this.deps.getLocalHookPosition();
        null === DD || DD.burst || null === zD || (DD.burst = !0, this.deps.playParticles(function(DD, zD) {
          let [wD, pD, sD] = zD;
          const {
            count: KD,
            rise: rD,
            colour: LD
          } = yL[DD], [cD, gD, RD] = LD;
          return {
            texture: "glint",
            pos1: [wD - .3, pD, sD - .3],
            pos2: [wD + .3, pD + .2, sD + .3],
            dir1: [-.6, rD, -.6],
            dir2: [.6, 1.4 * rD, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: KD,
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
              minColor: [cD, gD, RD, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [cD, gD, RD, 0],
              maxColor: [cD, gD, RD, 0]
            }],
            blendMode: NL.f.Add,
            hideDist: 48
          }
        }(DD.tier, zD)))
      }
    }
    var mL = wD(1260),
      eL = wD(1932),
      oL = wD(35);

    function aL(DD, zD) {
      return [{
        timeFraction: 0,
        minColor: [255 * DD[0], 255 * DD[1], 255 * DD[2], 1],
        maxColor: [255 * zD[0], 255 * zD[1], 255 * zD[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const uL = [0, 0, 0],
      vL = {
        texture: "glint",
        mipmaps: !1,
        bA: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: uL,
        dir2: uL,
        blendMode: NL.f.OneOne
      },
      tL = {
        ...vL,
        colorGradients: aL([1, .88, .38], [1, .65, .15])
      },
      FL = {
        ...vL,
        colorGradients: aL([.55, .95, 1], [.9, 1, 1])
      },
      YL = [.5, .5, .5],
      HL = {
        texture: "glint",
        mipmaps: !1,
        bA: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: aL([1, .12, .12], [1, .35, .2]),
        blendMode: NL.f.OneOne
      };
    class qL {
      constructor() {
        this.drops = new Map
      }
      QI(DD, zD) {
        if ("overflowFlash" === zD.kind) {
          const [wD, pD, sD] = zD.position, KD = DD.createParticles(HL, {
            pos: [wD, pD, sD],
            half: YL
          });
          return KD.emit(18), void KD.stop()
        }
        this.drops.has(zD.itemId) || this.drops.set(zD.itemId, {
          owner: zD.owner,
          cosmetic: zD.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      DU(DD) {
        if (0 === this.drops.size) return;
        const zD = performance.now(),
          wD = DD.getCameraPosition();
        let pD = 0;
        for (const KD of this.drops.values()) null !== KD.particles && pD++;
        for (const [KD, rD] of this.drops) {
          const LD = DD.getPositionView(KD);
          if (null === LD) {
            var sD;
            if (rD.seen || zD - rD.markedAt > 5e3) null !== rD.particles && pD--, null === (sD = rD.particles) || void 0 === sD || sD.stop(), this.drops.delete(KD);
            continue
          }
          rD.cosmetic || !DD.isLocalPlayer(rD.owner) || rD.pickupDelayCleared || (DD.clearPickupDelay(KD), rD.pickupDelayCleared = !0);
          const cD = rD.lastPosition,
            gD = rD.seen && (LD[0] - cD[0]) ** 2 + (LD[1] - cD[1]) ** 2 + (LD[2] - cD[2]) ** 2 > 4e-4,
            RD = (LD[0] - wD[0]) ** 2 + (LD[1] - wD[1]) ** 2 + (LD[2] - wD[2]) ** 2 < 2025;
          rD.seen = !0, cD[0] = LD[0], cD[1] = LD[1], cD[2] = LD[2], gD && (rD.lastMovingAt = zD), null !== rD.particles && (!RD || zD - rD.lastMovingAt > 500) && (rD.particles.stop(), rD.particles = null, pD--), gD && RD && null === rD.particles && pD < 32 && (rD.particles = DD.createParticles(rD.cosmetic ? FL : tL, {
            pos: LD
          }), pD++), null !== rD.particles && (rD.particles.moveTo(LD), rD.particles.setEmitRate(gD ? 12 : 0)), !gD && null === rD.particles && zD - Math.max(rD.lastMovingAt, rD.markedAt) > 2e3 && this.drops.delete(KD)
        }
      }
      dispose() {
        for (const zD of this.drops.values()) {
          var DD;
          null === (DD = zD.particles) || void 0 === DD || DD.stop()
        }
        this.drops.clear()
      }
    }
    var Dc = wD(197);
    const zc = Dc.f.eG * Dc.f.playerEyeToHeightRatio;
    class wc {
      constructor(DD) {
        this.host = DD, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      QI(DD) {
        this.lava = DD, this.nextUpdateAt = 0
      }
      DU() {
        var DD;
        const zD = this.host.now();
        if (zD < this.nextUpdateAt) return;
        this.nextUpdateAt = zD + 250;
        const wD = this.host.playerPosition(),
          pD = wD && this.findNearest([wD[0], wD[1] + zc, wD[2]]);
        if (!pD || pD.distance >= 40) return void this.stop();
        const sD = .5 * Math.min(1, (40 - pD.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(sD) : this.loop = this.host.play("lavaFlow", sD, pD.position, 40 + zc, 9, !0), null === (DD = this.loop) || void 0 === DD || DD.setPosition(pD.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var DD;
        null === (DD = this.loop) || void 0 === DD || DD.stop(), this.loop = null
      }
      findNearest(DD) {
        let zD = -1,
          wD = 1 / 0;
        for (let pD = 0; pD < this.lava.length; pD += 3) {
          const sD = this.lava[pD] - DD[0],
            KD = this.lava[pD + 1] - DD[1],
            rD = this.lava[pD + 2] - DD[2],
            LD = sD * sD + KD * KD + rD * rD;
          LD < wD && (wD = LD, zD = pD)
        }
        return zD < 0 ? null : {
          position: [this.lava[zD], this.lava[zD + 1], this.lava[zD + 2]],
          distance: Math.sqrt(wD)
        }
      }
    }
    var pc = wD(1906),
      sc = wD(38629);
    const Kc = {
      "Grey Portal": "Gray"
    };
    for (const Ac of sD.Ec) Kc[`${Ac} Portal`] = Ac;
    const rc = Object.keys(Kc),
      Lc = Object.fromEntries(rc.map((DD => [DD, (0, sD.Y)(sD.I[`${(0,sD.ue)(Kc[DD])}Team`])])));
    Object.fromEntries(rc.map((DD => [DD, sD.I[`${(0,sD.ue)(Kc[DD])}UiText`]])));
    class cc {
      constructor(DD, zD) {
        this.presentation = DD, this.portal = zD, this.unlocked = void 0
      }
      QI(DD) {
        const zD = !1 === this.unlocked && DD;
        this.unlocked = DD, this.DU();
        const {
          min: wD,
          max: pD,
          unlockedBlock: sD
        } = this.portal;
        if (zD && this.presentation.hasChunk(...wD)) {
          const [DD, zD, KD] = Lc[sD];
          this.presentation.playParticles({
            pos1: [...wD],
            pos2: pD.map((DD => DD + 1)),
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
              minColor: [DD, zD, KD, 1],
              maxColor: [Math.min(255, DD + 55), Math.min(255, zD + 55), Math.min(255, KD + 90), 1]
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
      DU() {
        var DD;
        const zD = this.unlocked ? this.portal.unlockedBlock : null !== (DD = this.portal.lockedBlock) && void 0 !== DD ? DD : "Light Gray Portal",
          {
            min: wD,
            max: pD
          } = this.portal;
        for (let sD = wD[0]; sD <= pD[0]; sD++)
          for (let DD = wD[1]; DD <= pD[1]; DD++)
            for (let KD = wD[2]; KD <= pD[2]; KD++) this.presentation.hasChunk(sD, DD, KD) && this.presentation.OJ(sD, DD, KD) !== zD && this.presentation.jT(sD, DD, KD, zD)
      }
    }
    const gc = {
        farming_1: {
          raises: DD => "NPC" === DD.type && "chef" === DD.variation,
          rise: .4
        },
        fishing_1: {
          raises: DD => "Draugr Warper" === DD.type,
          rise: .4
        }
      },
      Rc = (DD, zD, wD, KD) => {
        let {
          localPlayerId: rD
        } = KD;
        const LD = new Os({
          translate: (DD, zD) => (0, bs.z)(mL.e.get().getCurrentLanguageCode(), DD, zD),
          translateWithIcons: (DD, zD) => (0, bs.s)(mL.e.get().getCurrentLanguageCode(), DD, zD),
          setMenuOpen: DD => {
            DD ? (0, uD.r)() : (0, uD.g)()
          },
          dismissMenu: uD.i,
          publishSkills: DD => {
            vD.l.KG(Kw, DD, !0)
          },
          publishQuests: DD => {
            vD.l.KG(Rw, DD, !0)
          },
          publishQuestNotification: DD => {
            vD.l.KG(Aw, DD, !0)
          },
          publishDungeons: DD => {
            vD.l.KG(Iw, DD, !0)
          },
          publishCollections: DD => {
            vD.l.KG(lw, DD, !0)
          },
          publishMap: DD => {
            vD.l.KG(UD, DD, !0)
          },
          publishHud: DD => {
            vD.l.KG(hs, DD, !0)
          },
          publishPortalTransit: DD => {
            vD.l.KG(Nw, DD, !0)
          },
          isLoadingScreenUp: () => Xs.e.get("loadingOverlayVisible"),
          publishDailyReward: DD => {
            vD.l.KG(kw, DD, !0)
          },
          publishMailbox: DD => {
            vD.l.KG(uw, DD, !0)
          },
          publishQuestGraph: DD => {
            vD.l.KG(tw, DD, !0)
          },
          publishForge: DD => {
            vD.l.KG(Bp, DD, !0)
          },
          publishSmuggler: DD => {
            vD.l.KG(np, DD, !0)
          },
          publishKeepersChair: DD => {
            vD.l.KG(Cp, DD, !0)
          },
          publishReachLog: DD => {
            vD.l.KG(Tp, DD, !0)
          },
          publishLampLight: DD => {
            vD.l.KG(lp, DD, !0)
          },
          publishMagmaward: DD => {
            vD.l.KG(Np, DD, !0)
          },
          publishGlowtide: DD => {
            vD.l.KG(yp, DD, !0)
          },
          publishGlowMeter: DD => {
            vD.l.KG(mp, DD, !0)
          },
          publishHushWait: DD => {
            vD.l.KG(op, DD, !0)
          },
          publishPassage: DD => {
            vD.l.KG(Jp, DD, !0)
          },
          publishTideCharts: DD => {
            vD.l.KG(vp, DD, !0)
          },
          publishRegulars: DD => {
            vD.l.KG(ws, DD, !0)
          },
          publishHiddenWaters: DD => {
            vD.l.KG(Ls, DD, !0)
          },
          publishDialogue: DD => {
            vD.l.KG(gs, DD, !0)
          },
          publishAutographs: DD => {
            vD.l.KG(Is, DD, !0)
          },
          onDailyRewardStarted: DD => {
            jD.playSound(rD, DD.day === CD ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (DD, zD) => {
            jD.playSound(rD, "exp_collect", .35, 1 + .6 * DD / (zD - 1)), vD.l.KG(mw, DD === zD - 1)
          },
          onDailyRewardItemLanded: DD => {
            jD.playSound(rD, "pickUp", .6, 1 + .15 * DD)
          },
          onMailboxStarted: () => {
            jD.playSound(rD, "rpgMetalClick", .6, 1), jD.playSound(rD, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            jD.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: oL.k,
          requestTracking: DD => {
            jD.sendCommand(`quests track ${DD}`)
          },
          requestDungeonEnter: (DD, zD) => {
            jD.sendCommand(`dungeonEnter ${DD} ${zD}`)
          },
          requestQuestJump: DD => {
            jD.sendCommand(`${SD} jump ${DD}`)
          },
          requestQuestArrive: (DD, zD) => {
            const wD = `${SD} arrive ${DD}`;
            jD.sendCommand(zD ? `${wD} complete` : wD)
          },
          requestForge: DD => {
            let {
              blade: zD,
              guard: wD,
              handle: pD
            } = DD;
            jD.sendCommand(`forge ${zD} ${wD} ${pD}`)
          },
          requestDialogue: () => {
            jD.sendCommand("quests dialogue")
          },
          requestSmuggle: (DD, zD) => {
            jD.sendCommand(`smuggle ${DD} ${zD}`)
          },
          requestKeepersChairAim: DD => {
            jD.sendCommand(`keeperschair-aim ${DD}`)
          },
          requestReachLogOpen: () => {
            jD.sendCommand("reachlog-open")
          },
          requestLampLight: DD => {
            jD.sendCommand(`${DD}`)
          },
          requestTravel: DD => {
            jD.sendCommand(`map travel ${DD.kind} ${DD.id} ${DD.requestId}`)
          }
        });
        let cD, gD, RD, AD, fD, ID, BD, OD, JD, ED, QD, PD, xD;
        const bD = new qL;
        let jD, dD = null;
        const iD = gc[null !== wD && void 0 !== wD ? wD : ""],
          ZD = (DD, zD) => {
            null !== iD && void 0 !== iD && iD.raises(zD) && jD.setNametagOffset(DD, iD.rise)
          },
          mD = new kL({
            getLocalHookPosition: () => {
              const DD = eD.getLocalHook();
              return null !== DD && jD.checkValid(DD) ? jD.PJ(DD) : null
            },
            playParticles: DD => {
              jD.playParticleEffect(DD)
            },
            vibrate: DD => {
              tD.g.play("fishBite", DD)
            },
            now: () => performance.now()
          }),
          eD = new WL({
            getLineOwner: DD => jD.checkValid(DD) ? jD.getLineOwner(DD) : null,
            isLocalPlayer: DD => jD.isLocalPlayer(DD),
            getHookPosition: DD => {
              const [zD, , wD] = jD.PJ(DD);
              return [zD, wD]
            },
            isHushWaiting: () => {
              var DD;
              return "waiting" === (null === (DD = LD.hushWait.getSnapshot()) || void 0 === DD ? void 0 : DD.phase)
            },
            onCastLanded: (DD, zD) => {
              LD.tideCharts.castLanded(DD, zD)
            },
            onLocalHookSettled: () => {
              mD.onLocalHookSettled()
            },
            onLocalWaitEnded: DD => {
              mD.onLocalWaitEnded(DD)
            },
            now: () => performance.now()
          }),
          FD = new wc({
            now: () => performance.now(),
            playerPosition: () => jD.checkValid(rD) ? jD.PJ(rD) : null,
            play: (DD, zD, wD, pD, sD, KD) => jD.playSound(rD, DD, zD, 1, {
              ws: wD,
              maxHearDist: pD,
              refDistance: sD
            }, KD)
          }),
          YD = new Map;
        let HD;
        return {
          onCreate: DD => {
            if (jD = DD, dD = new sc.SkyblockEntityFacing(DD, iD ? ZD : null), LD.portalTransit.resumeArrival(null !== wD && void 0 !== wD ? wD : null), (null !== wD && void 0 !== wD ? wD : pD) === pD) {
              let DD = -1 / 0;
              HD = vD.l.subscribe("toggleMenu", (zD => {
                const wD = performance.now();
                "inventory|Workbench" !== zD || "cross_to_hub" !== LD.quests.getTrackedQuestId() || wD - DD < 1e4 || (DD = wD, jD.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [pD, sD] of Object.entries(null !== (zD = lD[null !== wD && void 0 !== wD ? wD : ""]) && void 0 !== zD ? zD : {})) {
              var zD;
              YD.set(pD, new cc({
                hasChunk: (zD, wD, pD) => DD.isBlockInLoadedChunk(zD, wD, pD),
                OJ: (zD, wD, pD) => DD.blockIdToBlockName(DD.getBlockId(zD, wD, pD)),
                jT: (zD, wD, pD, sD) => {
                  DD.jT(zD, wD, pD, sD)
                },
                playParticles: zD => {
                  DD.playParticleEffect(zD)
                }
              }, sD))
            }
            xD = (0, pc.h)((DD => function(DD) {
              return Object.hasOwn(ez, DD) || DD.startsWith("npc_")
            }(DD) ? az(DD) : null)), LD.resolveItemName = (zD, wD) => {
              const pD = DD.getItemStat(rD, zD, "displayName");
              return pD && "object" === typeof pD && "translationKey" in pD ? wD(pD.translationKey, (0, bs.r)(pD.params, eL.d.shown)) : "string" === typeof pD ? wD(pD) : zD
            }, LD.quests.notifications.onShown = DD => {
              "quest" === DD ? jD.playSound(rD, "magicAccent1", 1, 1) : "skillLevel" === DD ? jD.playSound(rD, "magicAccent1", 1, .6) : "landmark" === DD ? jD.playSound(rD, "trumpetFlare", 1, .6) : "npcNote" === DD ? jD.playSound(rD, "magicAccent2", .8, 1.1) : "started" === DD ? jD.playSound(rD, (0, SL.g)("bigDrumSwish"), 1, 1) : jD.playSound(rD, (0, SL.g)("rpgHandleSmallLeather"), 1, 1)
            }, LD.forge.onPartSelected = () => {
              jD.playSound(rD, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, LD.forge.onOpened = () => {
              ! function(DD) {
                DD.preloadSounds([(0, SL.g)("firecracker"), "fireBurn", "magicAccent2"])
              }(DD)
            }, LD.forge.onForgeStarted = (zD, wD, pD) => lL(DD, rD, zD, wD, pD), LD.smuggler.onBought = () => {
              jD.playSound(rD, (0, SL.g)("rpgHandleSmallLeather"), 1, 1), jD.playSound(rD, "chestOpen", .6, 1)
            }, LD.compass.register(new GD(LD.map, !0)), LD.compass.register(new GD(LD.map, !1)), LD.compass.register(new nD(LD.map)), LD.compass.register(new MD((() => LD.quests.getSnapshot().compassTarget)));
            for (const wD of ["enemy", "npc"]) LD.compass.register(new hD(LD.map, wD, (zD => DD.checkValid(zD) ? DD.PJ(zD) : void 0), (zD => DD.isAlive(zD))))
          },
          onAfterRender: (DD, zD) => {
            const wD = jD.checkValid(rD) ? jD.PJ(rD) : null;
            LD.navigation.afterRender(wD, performance.now(), zD), LD.glowtide.afterRender(wD, zD.cameraHeading), LD.tideCharts.afterRender(wD), eD.afterRender()
          },
          onClose: () => {
            var DD, zD, wD, pD, sD, KD, rD, UD, ID, GD, hD, nD, MD, XD, VD;
            HD && vD.l.unsubscribe(HD), null === (DD = xD) || void 0 === DD || DD(), bD.dispose(), FD.dispose(), null === (zD = dD) || void 0 === zD || zD.dispose(), eD.dispose(), LD.dispose(), null === (wD = cD) || void 0 === wD || wD(), null === (pD = gD) || void 0 === pD || pD(), null === (sD = RD) || void 0 === sD || sD(), null === (KD = AD) || void 0 === KD || KD(), null === (rD = fD) || void 0 === rD || rD(), null === (UD = BD) || void 0 === UD || UD(), null === (ID = undefined) || void 0 === ID || ID(), null === (GD = OD) || void 0 === GD || GD(), null === (hD = JD) || void 0 === hD || hD(), null === (nD = ED) || void 0 === nD || nD(), null === (MD = QD) || void 0 === MD || MD(), null === (XD = undefined) || void 0 === XD || XD(), null === (VD = PD) || void 0 === VD || VD()
          },
          onPlayerChangeBlock: (DD, zD, pD, KD, cD, gD) => {
            if (DD === rD && "Air" === gD) {
              const DD = jD.getClientOption(rD, "creative");
              LD.skills.predictBlock([zD, pD, KD], cD, DD);
              const gD = function(DD, zD) {
                  if ("hub" === zD || "farming_1" === zD || "mining_1" === zD) return !yD.has(DD) || "hub" !== zD && "mining_1" !== zD ? Object.hasOwn(ND, DD) ? ND[DD] : void 0 : WD
                }(cD, wD),
                RD = ("hub" === wD || "mining_1" === wD) && (sD.yd.some((DD => DD === cD)) || Object.hasOwn(kD, cD) || "mining_1" === wD && "Block of Coal" === cD);
              DD || void 0 === gD && !RD || jD.jT(zD, pD, KD, null !== gD && void 0 !== gD ? gD : WD)
            }
          },
          onPlayerAttackEntity: (DD, zD) => {
            if (DD !== rD || "Player" !== jD.getEntityType(zD)) return;
            const [wD, pD, sD] = jD.PJ(zD);
            jD.burstParticlePreset("critical", [wD, pD + 1, sD], 10)
          },
          onChangeBlockFail: DD => {
            for (const {
                HK: zD
              }
              of DD) LD.skills.rejectBlock(zD)
          },
          onReceivedMessageFromServer: (DD, zD) => {
            if ("skyblockGatedPortal" === DD) {
              var wD;
              const [DD, pD] = zD;
              return void(null === (wD = YD.get(DD)) || void 0 === wD || wD.QI(pD))
            }
            if ("skyblockDailyReward" === DD) return void LD.dailyReward.QI(zD);
            if ("skyblockMailbox" === DD) return void LD.mailbox.QI(zD);
            if ("skyblockPortalTransit" === DD) return void LD.portalTransit.QI(zD);
            if ("skyblockLoot" === DD) return void bD.QI(jD, zD);
            if ("skyblockLava" === DD) return void FD.QI(zD);
            if ("skyblockForge" === DD) return void LD.forge.QI(zD);
            if ("skyblockMagmaward" === DD) return void LD.magmaward.QI(zD);
            if ("skyblockGlowtide" === DD) return void LD.glowtide.QI(zD);
            if ("skyblockGlowMeter" === DD) return void LD.glowMeter.QI(zD);
            if ("skyblockHushWait" === DD) return void LD.hushWait.QI(zD);
            if ("skyblockPassage" === DD) {
              const DD = zD;
              return LD.passage.QI(DD), LD.reachLog.receivePassagePhase(DD.passagePhase), ED ??= (0, XD.v)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: LD.passage.show
              }), void LD.keepersChair.receivePassage({
                keepersChairPassagePhase: DD.passagePhase,
                keepersChairPassageNextPhase: DD.passageNextPhase,
                keepersChairPassageTurnsInMs: DD.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === DD) {
              const DD = zD;
              return LD.tideCharts.QI(DD), void(DD.tideCharts.length > 0 && (QD ??= (0, XD.v)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: LD.tideCharts.show
              })))
            }
            if (DD === oD.x) {
              var pD;
              const {
                hookId: DD,
                waiting: wD
              } = zD;
              return void eD.hookWaiting(DD, null !== (pD = null === wD || void 0 === wD ? void 0 : wD.remainingMs) && void 0 !== pD ? pD : null)
            }
            if ("skyblockBiteTell" === DD) return void mD.receiveTell(zD);
            if ("skyblockSmuggler" === DD) return void LD.smuggler.QI(zD);
            if ("skyblockKeepersChair" === DD) return LD.keepersChair.QI(zD), void LD.lampLight.setAtChair(LD.keepersChair.isAtChair());
            if ("skyblockLampLight" === DD) {
              const DD = zD;
              var sD;
              if (LD.lampLight.QI(DD), DD.lampLightReleasing) JD ??= (0, XD.v)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  LD.lampLight.setRelease(!1)
                }
              });
              else null === (sD = JD) || void 0 === sD || sD(), JD = void 0;
              return
            }
            if ("skyblockRegulars" === DD) return void LD.regulars.QI(zD);
            if ("skyblockHiddenWaters" === DD) return void LD.hiddenWaters.QI(zD);
            if ("skyblockReachLog" === DD) return LD.reachLog.QI(zD), void(OD ??= (0, XD.v)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: jp
              },
              onClick: LD.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === DD) {
              for (const [DD, wD, pD, sD] of zD) jD.jT(DD, wD, pD, sD);
              return
            }
            if ("skyblockHud" === DD) LD.receiveHud(zD);
            else if ("skyblockMap" === DD) LD.map.QI(zD);
            else if (DD === aD.d) LD.skills.QI(zD);
            else if (DD === TD && "dialogue" === zD.kind) LD.dialogue.QI(zD);
            else if (DD === TD) LD.quests.QI(zD);
            else if ("skyblockDungeons" === DD) LD.dungeons.QI(zD);
            else if ("sbCollections" === DD) LD.collections.QI(zD);
            else if ("skyblockQuestGraph" === DD) LD.questGraph.QI(zD);
            else {
              if ("skyblockAutographs" !== DD) return;
              LD.autographs.QI(zD)
            }
            if (!gD && LD.map.getSnapshot().enabled) {
              const DD = (0, XD.v)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: LD.map.show
                }),
                zD = (0, uD.t)(LD.map.show);
              gD = () => {
                DD(), zD()
              }
            }!RD && LD.skills.getSnapshot().enabled && (RD = (0, XD.v)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: LD.skills.show
            })), !BD && LD.collections.getSnapshot().enabled && (BD = (0, XD.v)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: LD.collections.show
            })), !AD && LD.quests.getSnapshot().enabled && (AD = (0, XD.v)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: LD.quests.show
            })), !PD && LD.autographs.getSnapshot().enabled && (PD = (0, XD.v)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: LD.autographs.show
            }));
            const KD = LD.dungeons.getSnapshot().enabled;
            var rD;
            (RD || AD || KD) && ID !== KD && (ID = KD, null === (rD = fD) || void 0 === rD || rD(), fD = (0, XD.v)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: dz
              },
              disabled: !KD,
              panel: !0,
              onClick: LD.dungeons.show
            }));
            cD || (cD = (0, uD.w)((0, VD.createElement)(jL, {
              controller: LD
            }), {
              content: (0, VD.createElement)(dL, {
                controller: LD
              }),
              onClose: LD.close
            }))
          },
          DU: () => {
            var DD;
            for (const zD of YD.values()) zD.DU();
            bD.DU(jD), FD.DU(), null === (DD = dD) || void 0 === DD || DD.DU(), LD.skills.DU(), LD.quests.DU(), LD.dailyReward.DU(), LD.mailbox.DU(), LD.map.DU()
          }
        }
      }
  },
  36352: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      d: () => pD
    });
    const pD = "skyblockSkills",
      sD = "skills_test_gym"
  },
  34226: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      f: () => rD
    });
    const pD = [{
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

    function sD(DD) {
      let zD, wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof DD) {
        if (!Number.isFinite(DD)) return "0";
        if (Math.abs(DD) < 100) {
          const zD = DD < 0 ? "-" : "",
            wD = Math.abs(DD);
          return wD >= 10 ? `${zD}${wD.toFixed(1).replace(/\.0$/,"")}` : `${zD}${wD.toFixed(2).replace(/\.?0+$/,"")}`
        }
        zD = BigInt(Math.floor(DD))
      } else zD = DD;
      const sD = zD < 0n ? -zD : zD,
        KD = zD < 0n ? "-" : "",
        rD = sD.toString();
      if (rD.length <= wD) return `${KD}${rD}`;
      const LD = 3 * Math.floor((rD.length - 1) / 3);
      if (LD < 3) return `${KD}${rD}`;
      if (LD > 3 * pD.length) {
        const DD = rD[0],
          zD = rD.slice(1, 3).replace(/0+$/, "");
        return `${KD}${zD?`${DD}.${zD}`:DD}e${rD.length-1}`
      }
      const {
        threshold: cD,
        suffix: gD
      } = pD[pD.length - LD / 3], RD = sD / cD, AD = Number(1000n * (sD % cD) / cD), UD = Number(RD) + AD / 1e3;
      let fD;
      return fD = UD >= 100 ? Math.floor(UD).toString() : UD >= 10 ? UD.toFixed(1).replace(/\.0$/, "") : UD.toFixed(2).replace(/\.?0+$/, ""), `${KD}${fD}${gD}`
    }
    const KD = pD.map((DD => {
      let {
        threshold: zD,
        suffix: wD
      } = DD;
      return {
        threshold: Number(zD),
        suffix: wD
      }
    })).filter((DD => {
      let {
        threshold: zD
      } = DD;
      return Number.isFinite(zD)
    }));

    function rD(DD) {
      const zD = Math.abs(DD),
        wD = DD < 0 ? "-" : "";
      for (const {
          threshold: pD,
          suffix: sD
        }
        of KD)
        if (zD >= pD) {
          const DD = zD / pD;
          if (DD >= 1e3) return `${wD}${zD.toExponential(2).replace("e+","e")}`;
          let KD;
          return KD = DD >= 100 ? Math.floor(DD).toString() : DD >= 10 ? DD.toFixed(1).replace(/\.0$/, "") : DD.toFixed(2).replace(/\.?0+$/, ""), `${wD}${KD}${sD}`
        } return `${wD}${zD}`
    }
  },
  38542: (DD, zD, wD) => {
    var pD = {
      "./combat_1.png": 38546,
      "./dungeon_crumbling_crypt.png": 38551,
      "./dungeon_frozen_hollow.png": 38560,
      "./dungeon_wildwood_grove.png": 38569,
      "./dungeons.png": 38576,
      "./farming_1.png": 38579,
      "./fishing_1.png": 38585,
      "./hub.png": 38591,
      "./island.png": 38597,
      "./mining_1.png": 38601,
      "./mining_1_bridge.png": 38603,
      "./mining_1_gallery.png": 38611,
      "./mining_1_hollow.png": 38617,
      "./mining_1_village.png": 38619
    };

    function sD(DD) {
      var zD = KD(DD);
      return wD(zD)
    }

    function KD(DD) {
      if (!wD.o(pD, DD)) {
        var zD = new Error("Cannot find module '" + DD + "'");
        throw zD.code = "MODULE_NOT_FOUND", zD
      }
      return pD[DD]
    }
    sD.keys = function() {
      return Object.keys(pD)
    }, sD.resolve = KD, DD.exports = sD, sD.id = 38542
  },
  38546: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38551: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38560: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38569: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38576: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38579: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38585: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38591: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38597: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38601: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38603: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38611: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38617: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38619: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18423: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20454: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22868: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24414: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26117: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26129: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38528: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);